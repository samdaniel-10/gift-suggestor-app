from django.contrib import admin
from .models import Birthday, Wedding, Anniversary, Housewarming, Farewell_Retirement, Babyshower

class BirthdayAdmin(admin.ModelAdmin):
    list_display = ('id','relationship','budget','gift_suggestion')

class WeddingAdmin(admin.ModelAdmin):
    list_display = ('id','category','budget','gift_suggestion')

class AnniversaryAdmin(admin.ModelAdmin):
    list_display = ('id','category','budget','gift_suggestion')

class HousewarmingAdmin(admin.ModelAdmin):
    list_display = ('id','category','budget','gift_suggestion')

class BabyshowerAdmin(admin.ModelAdmin):
    list_display = ('id','category','budget','gift_suggestion')

class Farewell_RetirementAdmin(admin.ModelAdmin):
    list_display = ('id','category','budget','gift_suggestion')

admin.site.register(Birthday,BirthdayAdmin)
admin.site.register(Wedding,WeddingAdmin)
admin.site.register(Anniversary,AnniversaryAdmin)
admin.site.register(Housewarming,HousewarmingAdmin)
admin.site.register(Babyshower,BabyshowerAdmin)
admin.site.register(Farewell_Retirement,Farewell_RetirementAdmin)


# Register your models here.
