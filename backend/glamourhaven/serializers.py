from pyexpat import model
from django.db.models import fields
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    """a serializer class for the django user"""
    class Meta:
        model = User
        fields = ['username', 'password', 'email']


class EmployeeSerializer(serializers.ModelSerializer):
    """a serializer class for the employee model"""
    user = UserSerializer(many=False)

    class meta:
        model = Employee
        fields = '__all__'

    def create(self, validated_data):
        """creates a new instance of a user if they don't exist
        and proceeds to create an instance of an Employee"""
        user_data = validated_data.pop("user")

        try:
            user = User.objects.get(username=user_data["username"])
        except:
            user = User.objects.create_user(**user_data)
        validated_data.update({"user": user})

        return Employee.objects.create(**validated_data)


class ClientSerializer(serializers.ModelSerializer):
    """A serializer class for the client model"""
    user = UserSerializer(many=False)

    class meta:
        model = Client
        fields = '__all__'

    def create(self, validated_data):
        """creates a new instance of a user if they don't exist
        and proceeds to create an instance of a client"""
        user_data = validated_data.pop("user")

        try:
            user = User.objects.get(username=user_data["username"])
        except:
            user = User.objects.create_user(**user_data)
        validated_data.update({"user": user})

        return Client.objects.create(**validated_data)


class CommoditySerializer(serializers.ModelSerializer):
    """a serializer class for the commodity model"""

    class meta:
        model = Commodity
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    """a serializer class for the service model"""

    class meta:
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

    class meta:
        model = Appointment
        fields = "__all__"
