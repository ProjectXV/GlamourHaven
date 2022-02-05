from pyexpat import model
from urllib import request
from django.db.models import fields
from rest_framework import serializers
from .models import *

from djoser.serializers import TokenCreateSerializer
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import authenticate, get_user_model
from djoser.conf import settings
from djoser.signals import user_registered
from djoser import utils
from djoser.compat import get_user_email
from djoser.serializers import UserSerializer, UserCreateSerializer
from django.db import IntegrityError, transaction


class CustomTokenCreateSerializer(AuthTokenSerializer):
    """A customized Authentication token serializer that allows to obtain
    the auth_token for user without activated account."""

    def validate(self, attrs):
        password = attrs.get("password")
        params = {settings.LOGIN_FIELD: attrs.get(settings.LOGIN_FIELD)}
        
        if password and params[settings.LOGIN_FIELD]:
            user = authenticate(request=self.context.get("request"), **params, password=password)
            if not user:
                user = User.objects.filter(**params).first()
                if user and not user.check_password(password):
                    msg = ('Unable to log in with provided credentials.')
                    raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = ('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        if user: # and self.user.is_active:
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
        user_data = validated_data.pop("user")
        request = self.context.get("request")

        try:
            user = User.objects.get(username=user_data["username"])
        except:
            try:
                user = self.perform_create_user(**user_data)
                user_registered.send(sender=self.__class__, user=user, request=request)

                context = {"user": user}
                to = [get_user_email(user)]
                if settings.SEND_ACTIVATION_EMAIL:
                    settings.EMAIL.activation(request, context).send(to)
            except IntegrityError:
                self.fail("cannot_create_user")
        validated_data.update({"user": user})

        new_employee = Employee.objects.create(**validated_data)
        return new_employee

    def perform_create_user(self, **validated_data):
        with transaction.atomic():
            user = User.objects.create_user(**validated_data)
            if settings.SEND_ACTIVATION_EMAIL:
                user.is_active = False
                user.save(update_fields=["is_active"])
        return user




class EmployeeSecureSerializer(serializers.ModelSerializer):
    """a serializer class for the employee model excluding sensitive information"""
    user = UserSecureSerializer(many=False)

    class Meta:
        model = Employee
        fields = '__all__'


class EmployeeLimitedSerializer(serializers.ModelSerializer):
    """a serializer class that limits employees to access only the data they are allowed to update"""
    user = UserSerializer(many=False)

    class Meta:
        model = Employee
        fields = ['user', 'phone_number', 'profile_picture']


class ClientSerializer(serializers.ModelSerializer):
    """A serializer class for the client model"""
    user = UserCreateSerializer(many=False)

    class Meta:
        model = Client
        fields = '__all__'

    def create(self, validated_data):
        """creates a new instance of a user if they don't exist
        and proceeds to create an instance of a client"""
        user_data = validated_data.pop("user")
        request = self.context.get("request")

        try:
            user = User.objects.get(username=user_data["username"])
        except:
            try:
                user = self.perform_create_user(**user_data)
                user_registered.send(sender=self.__class__, user=user, request=request)

                context = {"user": user}
                to = [get_user_email(user)]
                if settings.SEND_ACTIVATION_EMAIL:
                    settings.EMAIL.activation(request, context).send(to)
            except IntegrityError:
                self.fail("cannot_create_user")
        validated_data.update({"user": user})

        new_client = Client.objects.create(**validated_data)
        return new_client

    def perform_create_user(self, **validated_data):
        with transaction.atomic():
            user = User.objects.create_user(**validated_data)
            if settings.SEND_ACTIVATION_EMAIL:
                user.is_active = False
                user.save(update_fields=["is_active"])
        return user


class ClientSecureSerializer(serializers.ModelSerializer):
    """a serializer class for the Client model excluding sensitive information"""
    user = UserSecureSerializer(many=False)

    class Meta:
        model = Client
        fields = '__all__'


class CommoditySerializer(serializers.ModelSerializer):
    """a serializer class for the commodity model"""

    class Meta:
        model = Commodity
        fields = "__all__"


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
