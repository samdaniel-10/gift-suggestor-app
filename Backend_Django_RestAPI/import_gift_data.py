from pathlib import Path
from collections import defaultdict
from django.core import serializers
from django.core.management.color import no_style
from django.db import connection, transaction

fixture = Path("..") / "database_backup" / "gift_data.json"

print("Reading backup file...", flush=True)

with fixture.open(encoding="utf-8") as f:
    records = list(serializers.deserialize("json", f))

groups = defaultdict(list)

for record in records:
    groups[type(record.object)].append(record.object)

print("Records prepared:", len(records), flush=True)

with transaction.atomic():
    for model, objects in groups.items():
        print(
            f"Importing {model.__name__}: {len(objects)} records...",
            flush=True
        )
        model.objects.bulk_create(objects, batch_size=500)

    with connection.cursor() as cursor:
        for sql in connection.ops.sequence_reset_sql(
            no_style(), list(groups.keys())
        ):
            cursor.execute(sql)

print("Import completed successfully!", flush=True)

for model in groups:
    print(f"{model.__name__}: {model.objects.count()} records")
