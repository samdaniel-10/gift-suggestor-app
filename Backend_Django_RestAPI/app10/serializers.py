from rest_framework import serializers
from .models import info, Birthday, Wedding, Anniversary, Housewarming, Babyshower, Farewell_Retirement

class InfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = info
        fields = '__all__'

class BirthdaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Birthday
        fields = '__all__'


class WeddingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wedding
        fields = '__all__'


class AnniversarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Anniversary
        fields = '__all__'

class HousewarmingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housewarming
        fields = '__all__'

class BabyshowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Babyshower
        fields = '__all__'

class Farewell_RetirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farewell_Retirement
        fields = '__all__'