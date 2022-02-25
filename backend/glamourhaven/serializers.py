from pyexpat import model
from rest_framework import serializers
from .models import *

from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import authenticate, get_user_model
from djoser.conf import settings
from djoser.signals import user_registered
from djoser.compat import get_user_email
from djoser.serializers import UserCreateSerializer
from django.db import IntegrityError, transaction
from rest_framework import status


class CustomTokenCreateSerializer(AuthTokenSerializer):
    """A customized Authentication token serializer that allows to obtain
    the auth_token for user without activated account."""

    def validate(self, attrs):
        password = attrs.get("password")
        params = {settings.LOGIN_FIELD: attrs.get(settings.LOGIN_FIELD)}

        if password and params[settings.LOGIN_FIELD]:
            user = authenticate(request=self.context.get(
                "request"), **params, password=password)
            if not user:
                user = User.objects.filter(**params).first()
                if user and not user.check_password(password):
                    msg = ('Unable to log in with provided credentials.')
                    raise serializers.ValidationError(
                        msg, code='authorization')
        else:
            msg = ('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        if user:  # and self.user.is_active:
            attrs['user'] = user
            return attrs

        msg = ('Unable to log in with provided credentials.')
        raise serializers.ValidationError(msg, code='authorization')


class UserSecureSerializer(serializers.ModelSerializer):
    """a serializer class for the django user excluding sensitive information"""
    class Meta:
        model = User
        fields = ['username', 'email']


class EmployeeSerializer(serializers.ModelSerializer):
    """a serializer class for the employee model"""
    user = UserCreateSerializer(many=False)

    class Meta:
        model = Employee
        fields = '__all__'

    def create(self, validated_data):
        """creates a new instance of a user if they don't exist
        and proceeds to create an instance of a client"""
        user = create_user(self, validated_data)
        validated_data.update({"user": user})

        new_employee = Employee.objects.create(**validated_data)
        return new_employee


class EmployeeSecureSerializer(serializers.ModelSerializer):
    """a serializer class for the employee model excluding sensitive information"""
    profile_picture = serializers.ImageField(read_only=True)

    class Meta:
        model = Employee
        exclude = ['user']

    def update(self, instance, validated_data):
        """update method to enable updates on the Employee account by the management"""

        instance.phone_number = validated_data.get(
            "phone_number", instance.phone_number)
        instance.first_name = validated_data.get(
            "first_name", instance.first_name)
        instance.last_name = validated_data.get(
            "last_name", instance.last_name)
        instance.national_id = validated_data.get(
            "national_id", instance.national_id)
        instance.specialization = validated_data.get(
            "specialization", instance.specialization)
        instance.save()

        return instance


class EmployeeLimitedSerializer(serializers.ModelSerializer):
    """a serializer class that limits employees to access only the data they are allowed to update"""
    user = UserSecureSerializer

    class Meta:
        model = Employee
        fields = ['phone_number', 'profile_picture']

    def update(self, instance, validated_data):
        """update method to enable updates on the Employee account by the employees themselves"""

        instance.phone_number = validated_data.get(
            "phone_number", instance.phone_number)
        instance.profile_pic = validated_data.get(
            "profile_picture", instance.profile_picture)
        instance.save()

        return instance


# the following two methods create instances of new users when called from methods
# that create new employees and clients


def create_user(instance, validated_data):
    """Method called by the employee and client serializer create methods to create new
    instances of a user"""
    user_data = validated_data.pop("user")
    request = instance.context.get("request")

    try:
        user = User.objects.get(username=user_data["username"])
    except:
        try:
            user = perform_create_user(instance, **user_data)
            user_registered.send(sender=instance.__class__,
                                 user=user, request=request)

            context = {
                "user": user,
                "domain": "glamourhaven.vercel.app",
                "protocal": "https"
            }
            to = [get_user_email(user)]
            if settings.SEND_ACTIVATION_EMAIL:
                settings.EMAIL.activation(request, context).send(to)
        except IntegrityError:
            instance.fail("cannot_create_user")
    return user


def perform_create_user(self, **validated_data):
    with transaction.atomic():
        user = User.objects.create_user(**validated_data)
        if settings.SEND_ACTIVATION_EMAIL:
            user.is_active = False
            user.save(update_fields=["is_active"])
    return user


class ClientSerializer(serializers.ModelSerializer):
    """A serializer class for the client model"""
    user = UserCreateSerializer(many=False)

    class Meta:
        model = Client
        fields = '__all__'

    def create(self, validated_data):
        """creates a new instance of a user if they don't exist
        and proceeds to create an instance of a client"""

        user = create_user(self, validated_data)
        validated_data.update({"user": user})

        new_client = Client.objects.create(**validated_data)
        return new_client


class ClientSecureSerializer(serializers.ModelSerializer):
    """a serializer class for the Client model excluding sensitive information"""
    user = UserSecureSerializer(many=False)

    class Meta:
        model = Client
        fields = '__all__'


class ClientUpdateSerializer(serializers.ModelSerializer):
    """a serializer class for updating Client accounts"""

    class Meta:
        model = Client
        exclude = ["user"]

    def update(self, instance, validated_data):
        """update method to enable updates on the Client accounts"""

        instance.phone_number = validated_data.get(
            "phone_number", instance.phone_number)
        instance.is_subscribed = validated_data.get(
            "is_subscribed", instance.is_subscribed)
        instance.profile_picture = validated_data.get(
            "profile_picture", instance.profile_picture)
        instance.save()

        return instance


class CommoditySerializer(serializers.ModelSerializer):
    """a serializer class for the commodity model"""

    class Meta:
        model = Commodity
        fields = "__all__"

    # def update(self, instance, validated_data):
    #     """update method to enable updates on the Commodity"""

    #     instance.commodity_name = validated_data.get(
    #         "commodity_name", instance.commodity_name)
    #     instance.category = validated_data.get(
    #         "category", instance.category)
    #     instance.description = validated_data.get(
    #         "description", instance.description)
    #     instance.price = validated_data.get(
    #         "price", instance.price)
    #     instance.pricing_unit = validated_data.get(
    #         "pricing_unit", instance.pricing_unit)
    #     instance.number_in_stock = validated_data.get(
    #         "number_in_stock", instance.number_in_stock)
    #     instance.commodity_main_image = validated_data.get(
    #         "commodity_main_image", instance.commodity_main_image)
    #     instance.commodity_extra_image1 = validated_data.get(
    #         "commodity_extra_image1", instance.commodity_extra_image1)
    #     instance.commodity_extra_image2 = validated_data.get(
    #         "commodity_extra_image2", instance.commodity_extra_image2)
    #     instance.save()

    #     return instance


class ServiceSerializer(serializers.ModelSerializer):
    """a serializer class for the service model"""

    class Meta:
        model = Service
        fields = "__all__"


class AppointmentSerializer(serializers.ModelSerializer):
    """a serializer class for the appointment model"""
    service = serializers.PrimaryKeyRelatedField(
        queryset=Service.objects.all(), many=False)
    client = serializers.PrimaryKeyRelatedField(
        queryset=Client.objects.all(), many=False)
    staff = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all(), many=False)

    class Meta:
        model = Appointment
        fields = "__all__"


class LNMOrderSerializer(serializers.ModelSerializer):
    payment_transaction = serializers.PrimaryKeyRelatedField(read_only=True)
    placer = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = LNMOrder
        fields = "__all__"

    def create(self, validated_data):
        """creates an instance of an LNMOrder"""

        order_items = validated_data.pop("order_items")
        payment_transaction = validated_data.pop(
            "payment_transaction", None)
        transaction_id = validated_data.pop("transaction_id")
        validated_data.pop("placer", None)
        try:
            placer = Client.objects.get(user=self.context['request'].user)
            validated_data.update({"placer": placer})
        except:
            msg = ({'error': 'you must be logged in as a client to be able to make this order',
                    'status_code': status.HTTP_403_FORBIDDEN})
            raise serializers.ValidationError(
                msg, code='permission_denied')
        try:
            payment_transaction = LNMOnline.objects.get(
                MpesaReceiptNumber=transaction_id)
            validated_data.update(
                {"payment_transaction": payment_transaction})
        except:
            msg = ({'error': 'Unable to place the order, No transaction matches the id submitted',
                    'status_code': status.HTTP_400_BAD_REQUEST})
            raise serializers.ValidationError(
                msg, code='validationation')
        order = LNMOrder.objects.create(**validated_data)
        order.order_items.set(order_items)
        order.save()
        return order


class ClientEmailSerializer(serializers.Serializer):
    phone = serializers.CharField()
    email = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    message = serializers.CharField(style={'base_template': 'textarea.html'})

    class Meta:
        fields = "__all__"


class LNMOnlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = LNMOnline
        fields = "__all__"


class LNMOnlineRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LNMOnline
        fields = ['Amount', 'PhoneNumber']


class C2BPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = C2BPayment
        fields = ("id",
                  "TransactionType",
                  "TransID",
                  "TransTime",
                  "TransAmount",
                  "BusinessShortCode",
                  "BillRefNumber",
                  "InvoiceNumber",
                  "OrgAccountBalance",
                  "ThirdPartyTransID",
                  "MSISDN",
                  "FirstName",
                  "MiddleName",
                  "LastName",
                  )
