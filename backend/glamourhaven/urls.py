from django.urls import path
from rest_framework import routers
from . import views

# from glamourhaven.views import UserViewSet

router = routers.DefaultRouter()

 
urlpatterns = [
    #api endpoint for creating an employee
    path('add-employee', views.AddEmployeeApiView.as_view(), name="add-employee"),

     #api endpoint for listing an employee
    path('list-employees', views.ListEmployeesApiView.as_view(), name="list-employees"),

    #api endpoint for updating an employee
    path('update-employee/<str:pk>', views.UpdateEmployeeApiView.as_view(), name="update-clients"),

    #api endpoint for retrieving and deleting an employee
    path('get-delete-employee/<str:pk>', views.EmployeeViewSet.as_view({'get': 'retrieve','delete': 'destroy',}), name="get-delete-employee"),

    #api endpoint for listing and creating a commodity
    path('list-create-commodities', views.ListCreateCommoditiesApiView.as_view(), name="list-create-commodities"),

    #api endpoint for updating a commodity
    path('update-commodity/<str:pk>', views.UpdateCommodityApiView.as_view(), name="update-commodity"),

    #api endpoint for retrieving and deleting a commodity
    path('get-delete-commodity/<str:pk>', views.CommodityViewSet.as_view({'get': 'retrieve','delete': 'destroy',}), name="get-delete-commodity"),

    #api endpoint for listing and creating clients
    path('list-create-clients', views.ListCreateClientsApiView.as_view(), name="list-create-clients"),

    #api endpoint for updating client
    path('update-clients/<str:pk>', views.UpdateClientsApiView.as_view(), name="update-clients"),

    #api endpoint for retrieving and deleting a client
    path('get-delete-clients/<str:pk>', views.ClientViewSet.as_view({'get': 'retrieve','delete': 'destroy',}), name="get-delete-clients"),

    #api endpoint for listing and creating service
    path('list-create-service', views.ListCreateServiceApiView.as_view(), name="list-create-Service"),

    #api endpoint for updating a service
    path('update-service/<str:pk>', views.UpdateServiceApiView.as_view(), name="update-service"),

    #api endpoint for retrieving and deleting a service
    path('get-delete-service/<str:pk>', views.ServiceViewSet.as_view({'get': 'retrieve','delete': 'destroy',}), name="get-delete-service"),

    #api endpoint for listing and creating an appointment
    path('list-create-appointment', views.ListCreateAppointmentApiView.as_view(), name="list-create-appointment"),

    #api endpoint for updating an appointment
    path('update-appointment/<str:pk>', views.UpdateAppointmentApiView.as_view(), name="update-appointment"),

    #api endpoint for retrieving and deleting an appointment
    path('get-delete-appointment/<str:pk>', views.AppointmentViewSet.as_view({'get': 'retrieve','delete': 'destroy',}), name="get-delete-appointment"),

    path('login', views.CustomAuthToken.as_view(), name='login')
   
]


