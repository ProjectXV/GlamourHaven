# Create your views here.
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import status, viewsets
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.db.models import fields
from .serializers import *

class AddEmployeeApiView(generics.CreateAPIView):
    """"api for creating new employee"""
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class ListEmployeesApiView(generics.ListAPIView):
    """"api for listing  employee"""
    queryset = Employee.objects.all()
    serializer_class = EmployeeSecureSerializer
class EmployeeViewSet(viewsets.ModelViewSet):
    """"api for  getting and deleting an employee"""
    def get_queryset(self):
        return Employee.objects.all()

    def delete(self, request, pk=None):
        content = self.get_object()
        # look up some info info here
        content.delete()
        return Response('successfully deleted')

class UpdateEmployeeApiView(generics.UpdateAPIView):
    """"api for Updating an employee"""
    serializer_class = EmployeeLimitedSerializer
    queryset = Employee.objects.all()

class ListCreateCommoditiesApiView(generics.ListCreateAPIView):
    """"api for listing and creating a commodity"""
    queryset = Commodity.objects.all()
    serializer_class = CommoditySerializer
class UpdateCommodityApiView(generics.UpdateAPIView):
    """"api for updating a commodity"""
    serializer_class = CommoditySerializer
    queryset = Commodity.objects.all()

class CommodityViewSet(viewsets.ModelViewSet):
    """"api for deleting a commodity"""
 
    def get_queryset(self):
        return Commodity.objects.all()

    def delete(self, request, pk=None):
        content = self.get_object()
        # look up some info info here
        content.delete()
        return Response('successfully deleted')



class ListCreateClientsApiView(generics.ListCreateAPIView):
     """"api for listing and creating  clients"""
     queryset = Client.objects.all()
     serializer_class = ClientSerializer

class UpdateClientsApiView(generics.UpdateAPIView):
     """"api for updating clients"""
     serializer_class = ClientSecureSerializer
     queryset = Client.objects.all()
    
class ClientViewSet(viewsets.ModelViewSet):
     """"api for deleting clients"""
      
     def get_queryset(self):
        return Client.objects.all()

     def delete(self, request, pk=None):
        content = self.get_object()
        # look up some info info here
        content.delete()
        return Response('successfully deleted')

class ListCreateServiceApiView(generics.ListCreateAPIView):
     """"api for listing and creating  services"""
     queryset = Service.objects.all()
     serializer_class = ServiceSerializer

class UpdateServiceApiView(generics.UpdateAPIView):
     """"api for updating services"""
     serializer_class = ServiceSerializer
     queryset = Service.objects.all()
    
class ServiceViewSet(viewsets.ModelViewSet):
     """"api for deleting services"""
     def get_queryset(self):
        return Service.objects.all()

     def delete(self, request, pk=None):
        content = self.get_object()
        # look up some info info here
        content.delete()
        return Response('successfully deleted')

class ListCreateAppointmentApiView(generics.ListCreateAPIView):
     """"api for listing and creating  appointments"""
     queryset = Appointment.objects.all()
     serializer_class = AppointmentSerializer

class UpdateAppointmentApiView(generics.UpdateAPIView):
     """"api for Updating appointments"""
     serializer_class = AppointmentSerializer
     queryset = Appointment.objects.all()
    
class AppointmentViewSet(viewsets.ModelViewSet):
     """"api for deleting appointments"""
     def get_queryset(self):
        return Appointment.objects.all()

     def delete(self, request, pk=None):
        content = self.get_object()
        # look up some info info here
        content.delete()
        return Response('successfully deleted')

class CustomAuthToken(ObtainAuthToken):
    """A Custom authentication class that creates an expiring authentication token
    for a user who logs in"""

    def post(self, request, *args, **kwargs):
        """An override of the post method that takes a login request, verifies
        the login credentials and creates an expiring token once the user is verified"""
        
        serializer = self.serializer_class(data=request.data,
                                       context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        if not created:
            # update the created time of the token to keep it valid
            token.created = datetime.utcnow()
            token.save()

        if Client.objects.filter(profile=user).exists():
            account_id = Client.objects.get(profile=user).id
            session_status = 'Client'
        elif Employee.objects.filter(profile=user).exists():
            account_id = Client.objects.get(profile=user).id
            session_status = 'Employee'
        else:
            account_id = None
            session_status = None

        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'session_status': session_status,
            'account_id': account_id
        })








