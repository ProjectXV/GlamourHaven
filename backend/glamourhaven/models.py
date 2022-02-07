from unicodedata import category
from django.db import models
from django.db.models.deletion import CASCADE, PROTECT, SET_NULL
from datetime import datetime, timezone
from django.contrib.auth.models import User
from django.db.models.fields.related import ForeignKey

#make email in User a mandatory field
User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False


class Employee(models.Model):
    """a model representation of a glamourhaven employee"""
    user = models.OneToOneField(User, on_delete=CASCADE)
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    phone_number = models.CharField(max_length=15, null=False)
    national_id = models.CharField(max_length=25, null=False)
    profile_picture = models.ImageField(
        upload_to='images/profile', default='images/profile/profile.jpg', null=True)
    specialization = models.TextField(null=False)

    def __str__(self):
        """returns a string representation of an employee instance"""
        return self.first_name + ' ' + self.last_name


class Client(models.Model):
    """a model representation of a glamourhaven client data"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, null=False)
    is_subscribed = models.BooleanField(default=False)

    def __str__(self):
        """method returns a string representation of a client instance"""
        return self.user.username


class Commodity(models.Model):
    """a model representation of a glamourhaven sale item"""

    # commodity category options
    options = (
        ('skin care', 'Skin Care'),
        ('body care', 'Body Care'),
        ('makeup', 'Makeup'),
        ('hair care', 'Hair Care'),
        ('nail care', 'Nail Care'),
        ('fragrance', 'Fragrance'),
        ('tools, devices and accessories', 'Tools, Devices and Accessories'),
    )
    commodity_name = models.CharField(max_length=150, null=False)
    category = models.CharField(
        max_length=50, choices=options, default='others')
    description = models.TextField(null=False)
    price = models.FloatField(null=False)
    pricing_unit = models.CharField(max_length=60, null=False)
    number_in_stock = models.IntegerField(null=True)
    commodity_main_image = models.ImageField(
        upload_to='images/commodities', default='images/commodities/main.jpg', null=False)
    commodity_extra_image1 = models.ImageField(
        upload_to='images/commodities', default='images/commodities/extra1.jpg', null=True)
    commodity_extra_image2 = models.ImageField(
        upload_to='images/commodities', default='images/commodities/extra2.jpg', null=True)

    def __str__(self):
        """returns the name of a commodity as its string representation"""
        return self.commodity_name


class Service(models.Model):
    """a model representation of a service in glamourhaven"""

    service_title = models.CharField(max_length=200, null=False)
    service_description = models.TextField(null=False)
    service_cost = models.FloatField(null=False)
    service_estimate_time = models.FloatField(null=False)
    service_main_image = models.ImageField(
        upload_to='images/commodities', default='images/services/main.jpg', null=False)
    service_extra_image1 = models.ImageField(
        upload_to='images/commodities', default='images/services/extra1.jpg', null=True)
    service_extra_image2 = models.ImageField(
        upload_to='images/commodities', default='images/services/extra2.jpg', null=True)

    def __str__(self):
        """returns the title of a service as its string representation"""
        return self.service_title


class Appointment(models.Model):
    """A model representation of an appointment booked by a client"""

    # status options
    status_choices = (
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
        ("postponed", "Postponed"),
    )
    services = models.ManyToManyField(Service)
    starting_time = models.DateTimeField(null=False)
    end_time = models.DateTimeField(null=False)
    client = models.ForeignKey(Client, on_delete=CASCADE)
    staff = models.ForeignKey(Employee, null=True, on_delete=SET_NULL)
    status = models.CharField(
        max_length=20, choices=status_choices, default='pending')

    def __str__(self):
        """returns a string representation of an appointment"""
        return f"{self.service} booked by {self.client} with {self.staff}, as from {self.starting_time} to {self.end_time}."
