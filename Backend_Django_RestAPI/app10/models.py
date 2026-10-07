from django.db import models

# Create your models here.

class info(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    mobile_no = models.CharField(max_length=15)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

from django.db import models

class Birthday(models.Model):
    relationship = models.CharField(max_length=50)
    interest = models.CharField(max_length=100)
    budget = models.CharField(max_length=50)
    gift_type = models.CharField(max_length=100)
    gift_suggestion = models.CharField(max_length=100)
    def __str__(self):
        return self.gift_suggestion

class Wedding(models.Model):
    budget = models.CharField(max_length=50)
    gift_type = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    gift_preferences = models.CharField(max_length=100)
    gift_suggestion = models.CharField(max_length=100)
    def __str__(self):
        return self.gift_suggestion

class Housewarming(models.Model):
    budget = models.CharField(max_length=50)
    gift_type = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    gift_preferences = models.CharField(max_length=100)
    gift_suggestion = models.CharField(max_length=100)
    def __str__(self):
        return self.gift_suggestion

class Anniversary(models.Model):
    budget = models.CharField(max_length=50)
    gift_type = models.CharField(max_length=100)
    gift_preferences = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    gift_suggestion = models.CharField(max_length=100)
    def __str__(self):
        return self.gift_suggestion

class Babyshower(models.Model):
    budget = models.CharField(max_length=50)
    gift_type = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    gift_preferences = models.CharField(max_length=100)
    gift_suggestion = models.CharField(max_length=100)
    def __str__(self):
        return self.gift_suggestion

class Farewell_Retirement(models.Model):
    occassion_type = models.CharField(max_length=50)
    budget = models.CharField(max_length=50)
    gift_type = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    gift_preferences = models.CharField(max_length=100)
    gift_suggestion = models.CharField(max_length=100)
    def __str__(self):
        return self.gift_suggestion