from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL, PROTECT
from datetime import datetime, timezone
from django.contrib.auth.models import User
from django.db.models.fields.related import ForeignKey

# make email in User a mandatory field
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
        upload_to='images/profile', null=True)
    specialization = models.TextField(null=False)

    def __str__(self):
        """returns a string representation of an employee instance"""
        return self.first_name + ' ' + self.last_name


class Client(models.Model):
    """a model representation of a glamourhaven client data"""
    user = models.OneToOneField(User, on_delete=CASCADE)
    phone_number = models.CharField(max_length=15, null=False)
    is_subscribed = models.BooleanField(default=False)
    profile_picture = models.ImageField(
        upload_to='images/profile', null=True)

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
        upload_to='images/commodities', null=False)
    commodity_extra_image1 = models.ImageField(
        upload_to='images/commodities', null=True)
    commodity_extra_image2 = models.ImageField(
        upload_to='images/commodities', null=True)

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
    total_service_cost = models.FloatField()
    client = models.ForeignKey(Client, on_delete=CASCADE)
    staff = models.ForeignKey(Employee, null=True, on_delete=SET_NULL)
    status = models.CharField(
        max_length=20, choices=status_choices, default='pending')

    def __str__(self):
        """returns a string representation of an appointment"""
        return f"{self.service} booked by {self.client} with {self.staff}, as from {self.starting_time} to {self.end_time}."


class LNMOnline(models.Model):
    CheckoutRequestID = models.CharField(max_length=50, blank=True, null=True)
    MerchantRequestID = models.CharField(max_length=20, blank=True, null=True)
    ResultCode = models.IntegerField(blank=True, null=True)
    ResultDesc = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.FloatField(blank=True, null=True)
    MpesaReceiptNumber = models.CharField(max_length=15, blank=True, null=True)
    Balance = models.CharField(max_length=12, blank=True, null=True)
    TransactionDate = models.DateTimeField(blank=True, null=True)
    PhoneNumber = models.CharField(max_length=13, blank=True, null=True)

    def __str__(self):
        return f"{self.PhoneNumber} >> {self.Amount} >> {self.MpesaReceiptNumber}"


class LNMOrder(models.Model):
    order_items = models.ManyToManyField(Commodity)
    date_placed = models.DateTimeField(default=datetime.now, null=True)
    order_value = models.FloatField(null=False)
    is_delivered = models.BooleanField(default=False, null=False)
    date_delivered = models.DateTimeField(null=True)
    payment_transaction = models.ForeignKey(
        LNMOnline, on_delete=PROTECT, null=False)
    placer = models.ForeignKey(Client, on_delete=SET_NULL, null=True)
    transaction_id = models.CharField(max_length=15, blank=True, null=True)


class C2BPayment(models.Model):
    TransactionType = models.CharField(max_length=12, blank=True, null=True)
    TransID = models.CharField(max_length=12, blank=True, null=True)
    TransTime = models.CharField(max_length=14, blank=True, null=True)
    TransAmount = models.CharField(max_length=12, blank=True, null=True)
    BusinessShortCode = models.CharField(max_length=6, blank=True, null=True)
    BillRefNumber = models.CharField(max_length=20, blank=True, null=True)
    InvoiceNumber = models.CharField(max_length=20, blank=True, null=True)
    OrgAccountBalance = models.CharField(max_length=12, blank=True, null=True)
    ThirdPartyTransID = models.CharField(max_length=20, blank=True, null=True)
    MSISDN = models.CharField(max_length=12, blank=True, null=True)
    FirstName = models.CharField(max_length=20, blank=True, null=True)
    MiddleName = models.CharField(max_length=20, blank=True, null=True)
    LastName = models.CharField(max_length=20, blank=True, null=True)
