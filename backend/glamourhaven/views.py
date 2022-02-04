# Create your views here.
from rest_framework import viewsets
from django.contrib.auth.models import User
from django.db.models import fields
from .serializers import UserSerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


