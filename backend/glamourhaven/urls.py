from django.urls import path, re_path
from . import views

urlpatterns = [
    # accesses api end point for adding a new employee
    path('add-employee', views.AddEmployeeApiView.as_view(), name='add-employee'),
    # accesses api end point for listing all current employees
    path('employees', views.ListEmployeesApiView.as_view(), name='employees'),

    # accesses api end point for viewing a specific employee
    path('employees/<str:pk>/', views.SpecificEmployeeApiView.as_view(),
         name='specific-employee'),

    # accesses api end point for updating employee profile
    path('employee/<str:pk>/update-profile', views.UpdateEmployeeApiView.as_view(),
         name='update-profile'),

    # accesses api end point for managing employee profile
    path('employees/<str:pk>/manage-employee', views.ManageEmployeeApiView.as_view(),
         name='manage-employee'),

    # accesses api end point for creating a new client
    path('signup', views.CreateClientApiView.as_view(), name='signup'),

    # accesses api end point for listing all clients
    path('clients', views.ListClientsApiView.as_view(), name='clients'),

    # accesses api end point for viewing a specific client
    path('clients/<str:pk>/', views.SpecificClientApiView.as_view(),
         name='specific-client'),


    # accesses api end point for updating client profile
    path('client/<str:pk>/update-profile', views.UpdateClientApiView.as_view(),
         name='update-client-profile'),

    re_path(
        r'^activate-account/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', views.UserActivationView.as_view()),

    # accesses api end point for adding new sale products
    path('add-commodity', views.AddCommodityApiView.as_view(), name='add-commodity'),

    # accesses api end point for listing all sale products in stock
    path('products', views.ListCommoditiesApiView.as_view(), name='products'),

    # accesses api end point for viewing a specific commodity
    path('products/<str:pk>/', views.SpecificCommodityApiView.as_view(),
         name='specific-product'),


    # accesses api end point for updating sale products
    path('commodity/<str:pk>/update-commodity', views.UpdateCommodityApiView.as_view(),
         name='update-commodity'),

    # accesses api end point for adding a new service
    path('add-service', views.AddServiceApiView.as_view(), name='add-service'),

    # accesses api end point for listing all services
    path('services', views.ListServicesApiView.as_view(), name='services'),

    # accesses api end point for viewing a specific service
    path('services/<str:pk>/', views.SpecificServiceApiView.as_view(),
         name='specific-service'),


    # accesses api end point for updating a service
    path('service/<str:pk>/update-service', views.UpdateServiceApiView.as_view(),
         name='update-service'),

    # accesses api end point for booking an appointment
    path('book-appointment', views.BookAppointmentApiView.as_view(),
         name='book-appointment'),

    # accesses api end point for listing all booked appointments
    path('appointments', views.ListAppointmentsApiView.as_view(),
         name='appointments'),

    # accesses api end point for viewing a specific appointment
    path('appointments/<str:pk>/', views.SpecificAppointmentApiView.as_view(),
         name='specific-appointment'),

    # accesses api end point for viewing all of a specific client's appointments
    path('client-appointments/<str:pk>/', views.SpecificClientAppointmentsApiView.as_view(),
         name='specific-client-appointments'),


    # accesses api end point for updating an appointment
    path('appointments/<str:pk>/update-appointment', views.UpdateAppointmentApiView.as_view(),
         name='update-appointment'),

    # accesses api end point for sending an email to admin
    path('client-contact', views.ClientEmailView.as_view(), name='client_contact'),

    # accesses an api end point for acquiring an expiring auth token
    path('login', views.CustomAuthToken.as_view(), name='login'),

    # accesses an api end point for lipa na mpesa transaction confirmation
    path('lnm/',
         views.LNMCallbackUrlAPIView.as_view(), name='payment'),

    # accesses an api end point for making a lipa na mpesa request
    path("lnm-pay/", views.MakeLNMPayment.as_view(),
         name="lnm-pay"),

    # accesses an api end point for submitting an order
    path('submit-order/',
         views.LNMOrderAPIView.as_view(), name='create-order'),

    # accesses api end point for listing all placed LNM orders
    path('lnm-orders', views.ListLNMOrdersApiView.as_view(),
         name='lnm-orders'),

    # accesses an api end point for viewing a specific LNM order
    path('lnmorders/<str:pk>/', views.SpecificLNMOrderApiView.as_view(),
         name='specific-LNMOrder'),

    # accesses api end point for viewing all of a specific client's orders
    path('client-lnmorders/<str:pk>/', views.SpecificClientOrdersApiView.as_view(),
         name='specific-client-orders'),


    # c2b transaction validation url
    path("c2b-validation/", views.C2BValidationAPIView.as_view(),
         name="c2b-validation"),

    # c2b transaction confirmation url
    path("c2b-confirmation/", views.C2BConfirmationAPIView.as_view(),
         name="c2b-confirmation"),
]
