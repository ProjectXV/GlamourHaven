
from urllib import request
from django.http import HttpResponse, HttpResponseServerError, JsonResponse
from django.shortcuts import render
import requests

import pytz
from .serializers import *
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateAPIView
from .models import *
from rest_framework import filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.core.mail import send_mail
from smtplib import SMTPException
from .permissions import *
from .mpesa import lipa_na_mpesa
from django.utils import timezone
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


class AddEmployeeApiView(CreateAPIView):
    """api for adding new employees"""
    # user must be authenticated and with staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()


class ListEmployeesApiView(ListAPIView):
    """lists all created instances of employees"""
    serializer_class = EmployeeSecureSerializer
    queryset = Employee.objects.all()


class SpecificEmployeeApiView(ListAPIView):
    """gets a specific instance of an employee"""

    serializer_class = EmployeeSecureSerializer

    def get_queryset(self):
        return Employee.objects.all().filter(id=self.kwargs['pk'])


class UpdateEmployeeApiView(RetrieveUpdateAPIView):
    """Allows employees to update their profiles"""
    # they can only update their profile pictures and phone numbers
    # user as the owner of the target object
    permission_classes = [permissions.IsAuthenticated, HasAccountPermission]
    serializer_class = EmployeeLimitedSerializer
    queryset = Employee.objects.all()


class ManageEmployeeApiView(RetrieveUpdateDestroyAPIView):
    """Allows employer to update employees details"""

    # user must be authenticated and with the staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]

    serializer_class = EmployeeSecureSerializer
    queryset = Employee.objects.all()


class CreateClientApiView(CreateAPIView):
    """creats new client accounts"""

    serializer_class = ClientSerializer
    queryset = Client.objects.all()


class ListClientsApiView(ListAPIView):
    """Lists all instances of clients"""

    # user must be authenticated and with the staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]
    serializer_class = ClientSecureSerializer
    queryset = Client.objects.all()


class SpecificClientApiView(ListAPIView):
    """Gets a specific instance of a client"""

    serializer_class = ClientSecureSerializer

    def get_queryset(self):
        return Client.objects.all().filter(id=self.kwargs['pk'])


class UpdateClientApiView(RetrieveUpdateDestroyAPIView):
    """Allows clients to update their accounts"""
    # user must be logged in as a the owner of the target object
    permission_classes = [permissions.IsAuthenticated, HasAccountPermission]

    serializer_class = ClientUpdateSerializer
    queryset = Client.objects.all()


class AddCommodityApiView(CreateAPIView):
    """api for adding new sale items"""
    # user must be authenticated and with the staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]

    serializer_class = CommoditySerializer
    queryset = Commodity.objects.all()


class ListCommoditiesApiView(ListAPIView):
    """api for listing all sale items"""

    serializer_class = CommoditySerializer
    queryset = Commodity.objects.all()
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, ]
    search_fields = [
        'commodity_name', 'description', 'price', 'category', ]

    filterset_fields = ['category', ]


class SpecificCommodityApiView(ListAPIView):
    """gets a specific sale item"""

    serializer_class = CommoditySerializer

    def get_queryset(self):
        return Commodity.objects.all().filter(id=self.kwargs['pk'])


class UpdateCommodityApiView(RetrieveUpdateDestroyAPIView):
    """api that allows shop owner to update their sale commodities"""
    # user must be authenticated and with the staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]

    serializer_class = CommoditySerializer
    queryset = Commodity.objects.all()


class AddServiceApiView(CreateAPIView):
    """api for adding a new service"""
    # user must be authenticated and with the staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]

    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class ListServicesApiView(ListAPIView):
    """api for listing all services"""

    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, ]
    search_fields = [
        'service_title', 'service_description', 'service_price', ]


class SpecificServiceApiView(ListAPIView):
    """api used to get a specific service"""

    serializer_class = ServiceSerializer

    def get_queryset(self):
        return Service.objects.all().filter(id=self.kwargs['pk'])


class UpdateServiceApiView(RetrieveUpdateDestroyAPIView):
    """api that allows shop owner to update their services"""
    # user must be authenticated and with the staff status
    permission_classes = [permissions.IsAuthenticated, IsManager]

    serializer_class = ServiceSerializer
    queryset = Commodity.objects.all()


class BookAppointmentApiView(CreateAPIView):
    """api for booking an appointment"""
    # user must be an authenticated client
    permission_classes = [permissions.IsAuthenticated, IsClient]

    serializer_class = AppointmentSerializer
    queryset = Appointment.objects.all()


class ListAppointmentsApiView(ListAPIView):
    """lists all booked Appointments"""
    # user must be an authenticated employee or with a staff status
    permission_classes = [permissions.IsAuthenticated, IsManager | IsEmployee]

    serializer_class = AppointmentSerializer
    queryset = Appointment.objects.all()


class SpecificAppointmentApiView(ListAPIView):
    """gets a specific Appointment"""
    # user must be an authenticated staff, employee or client who owns the object
    permission_classes = [permissions.IsAuthenticated,
                          IsManager | IsEmployee | HasClientAppointmentPermission]

    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.all().filter(id=self.kwargs['pk'])


class SpecificClientAppointmentsApiView(ListAPIView):
    """lists all appointments booked by a specific client"""

    # user must be an authenticated staff or client
    permission_classes = [permissions.IsAuthenticated, IsManager | IsClient]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.all().filter(client=self.kwargs['pk'])


class UpdateAppointmentApiView(RetrieveUpdateDestroyAPIView):
    """api for updating an appointment"""
    # user must be an authenticated staff, employee or client who owns the object
    permission_classes = [permissions.IsAuthenticated,
                          IsManager | IsEmployee | HasClientAppointmentPermission]

    serializer_class = AppointmentSerializer
    queryset = Appointment.objects.all()


class LNMOrderAPIView(CreateAPIView):
    """api for placing an lnm order"""
    # user must be an authenticated client
    permission_classes = [permissions.IsAuthenticated, IsClient]

    query_set = LNMOrder.objects.all()
    serializer_class = LNMOrderSerializer


class ListLNMOrdersApiView(ListAPIView):
    """lists all LNM orders"""
    # user must be an authenticated client or staff
    permission_classes = [permissions.IsAuthenticated, IsManager | IsEmployee]

    serializer_class = LNMOrderSerializer
    queryset = LNMOrder.objects.all()


class SpecificLNMOrderApiView(ListAPIView):
    """api used to get a specific LNM order"""
    # user must be an authenticated staff or client who owns the target object
    permission_classes = [permissions.IsAuthenticated,
                          IsManager | HasClientOrderPermission]

    serializer_class = LNMOrderSerializer

    def get_queryset(self):
        return LNMOrder.objects.all().filter(id=self.kwargs['pk'])


class SpecificClientOrdersApiView(ListAPIView):
    """api for listing all orders made by a specific client"""
    # user must be an authenticated staff or client who owns the target objects
    permission_classes = [permissions.IsAuthenticated, IsManager | IsClient]
    serializer_class = LNMOrderSerializer

    def get_queryset(self):
        return LNMOrder.objects.all().filter(placer=self.kwargs['pk'])


class UpdateLNMOrderApiView(RetrieveUpdateDestroyAPIView):
    """api that enable an LNM order update"""
    # allows only authenticated users with the staff status ot change the target object
    permission_classes = [permissions.IsAuthenticated,
                          IsManager]

    serializer_class = LNMOrderSerializer
    queryset = LNMOrder.objects.all()


class ClientEmailView(CreateAPIView):
    """api for contacting admin via email"""
    serializer_class = ClientEmailSerializer

    def post(self, request):
        """gets user request data and sends it to the admin email address"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid:
            name = request.data["first_name"] + " " + request.data["last_name"]
            phone_number = request.data["phone"]
            email_address = request.data["email"]
            message = request.data["message"]

            subject = "Important!! Client Incoming"
            message = f"""
            Name: {name}
            Phone No.: {phone_number}
            Sender email: {email_address}

            {message}"""

            try:
                send_mail(subject, message, email_address, [
                          'glamourhavens@gmail.com'], fail_silently=False)
                data = {'status': 'success', 'status_code': 200}
                return JsonResponse(data)

            except SMTPException:
                data = {'status': 'failed',
                        'status_code': HttpResponseServerError.status_code}
                return JsonResponse(data)

        else:
            data = {'status': 'failed',
                    'status_code': 400}


class UserActivationView(APIView):
    """gets user account activation request"""

    def get(self, request, uid, token):
        """gets the activation request, captures the activation id and token from the request link
        and posts them to the djoser account activation url"""

        protocol = 'https://' if request.is_secure() else 'http://'
        web_url = protocol + 'glamourhaven.herokuapp.com'
        post_url = web_url + "/accounts/users/activation/"
        post_data = {'uid': uid, 'token': token}
        result = requests.post(post_url, json=post_data)
        content = result.text
        return Response({
            'content': content,
            'data': post_data,
            'url': post_url})


class CustomAuthToken(ObtainAuthToken):
    """A Custom authentication class that creates an expiring authentication token
    for a user who logs in"""
    serializer_class = CustomTokenCreateSerializer

    def post(self, request, *args, **kwargs):
        """An override of the post method that takes a login request, verifies
        the login credentials and creates an expiring token once the user is verified"""

        try:
            serializer = self.serializer_class(data=request.data,
                                               context={'request': request})

            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            if not created:
                # update the created time of the token to keep it valid
                token.created = datetime.utcnow().replace(tzinfo=pytz.utc)
                token.save()

            if Client.objects.filter(user=user).exists():
                account_id = Client.objects.get(user=user).id
                try:
                    profile_picture = Client.objects.get(
                        user=user).profile_picture.url
                except:
                    profile_picture = None
                session_status = 'client'
            elif Employee.objects.filter(user=user).exists():
                account_id = Employee.objects.get(user=user).id
                try:
                    profile_picture = Employee.objects.get(
                        user=user).profile_picture.url
                except:
                    profile_picture = None
                session_status = 'employee'
            elif User.objects.get(id=user.id).is_staff:
                account_id = user.id
                session_status = 'manager'
                profile_picture = None
            else:
                account_id = None
                session_status = None
                profile_picture = None

            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email,
                'session_status': session_status,
                'account_id': account_id,
                'profile_picture': profile_picture,
                'status': 'success',
                'status_code': 200
            })
        except Exception as e:
            return Response({
                'error': str(e),
                'status': 'failed',
                'status_code': 401
            })


class LNMCallbackUrlAPIView(CreateAPIView):
    queryset = LNMOnline.objects.all()
    serializer_class = LNMOnlineSerializer

    def create(self, request):

        merchant_request_id = request.data["Body"]["stkCallback"]["MerchantRequestID"]
        checkout_request_id = request.data["Body"]["stkCallback"]["CheckoutRequestID"]
        result_code = request.data["Body"]["stkCallback"]["ResultCode"]
        result_description = request.data["Body"]["stkCallback"]["ResultDesc"]
        amount = request.data["Body"]["stkCallback"]["CallbackMetadata"]["Item"][0][
            "Value"
        ]
        mpesa_receipt_number = request.data["Body"]["stkCallback"]["CallbackMetadata"][
            "Item"
        ][1]["Value"]

        balance = ""
        transaction_date = request.data["Body"]["stkCallback"]["CallbackMetadata"][
            "Item"
        ][2]["Value"]

        phone_number = request.data["Body"]["stkCallback"]["CallbackMetadata"]["Item"][
            3
        ]["Value"]

        str_transaction_date = str(transaction_date)
        transaction_datetime = datetime.strptime(
            str_transaction_date, "%Y%m%d%H%M%S")

        aware_transaction_datetime = pytz.utc.localize(transaction_datetime)

        our_model = LNMOnline.objects.create(
            CheckoutRequestID=checkout_request_id,
            MerchantRequestID=merchant_request_id,
            Amount=amount,
            ResultCode=result_code,
            ResultDesc=result_description,
            MpesaReceiptNumber=mpesa_receipt_number,
            Balance=balance,
            TransactionDate=aware_transaction_datetime,
            PhoneNumber=phone_number,
        )

        our_model.save()

        return Response({"OurResultDesc": "YEEY!!! It worked!"})


class MakeLNMPayment(CreateAPIView):
    """Api for making lnm express requests"""
    queryset = LNMOnline.objects.all()
    serializer_class = LNMOnlineRequestSerializer
    permission_classes = [permissions.IsAuthenticated, IsClient]

    def post(self, request):
        phonenumber = str(request.data['PhoneNumber'])
        # create the required phone number format regardless of the format submitted by the user
        phonenumber = '254' + phonenumber[-9:]
        amount = request.data['Amount']

        payment = lipa_na_mpesa.lipa_na_mpesa(phonenumber, amount)
        return Response(payment)


class C2BValidationAPIView(CreateAPIView):
    """Validates mpesa C2B transactions"""
    queryset = C2BPayment.objects.all()
    serializer_class = C2BPaymentSerializer

    # def create(self, request):
    #     print(request.data, "this is request.data in Validation")
    #     my_headers = self.get_success_headers(request.data)

    #     return Response({
    #         {
    #             "ResultCode": 0,
    #             "ResultDesc": "Accepted"
    #         }
    #     },
    #     )

    # #     # {
    # #     #     "ResultCode": 1,
    # #     #     "ResultDesc": "Rejected"
    # #     # }


class C2BConfirmationAPIView(CreateAPIView):
    """gets mpesa c2b transactions confirmation data"""
    # the data is stored in the database
    queryset = C2BPayment.objects.all()
    serializer_class = C2BPaymentSerializer

    def create(self, request):

        transaction_time = request.data['TransTime']
        str_transaction_date = str(transaction_time)
        transaction_date = datetime.strptime(
            str_transaction_date, '%Y%m%d%H%M%S')

        # Sync Safaricoms response time with server time
        aware_transaction_date = pytz.utc.localize(transaction_date)
        print(aware_transaction_date)

        transaction_type = request.data['TransactionType']
        transaction_id = request.data['TransID']
        transaction_time = aware_transaction_date
        transaction_amount = request.data['TransAmount']
        business_short_code = request.data['BusinessShortCode']
        bill_ref_number = request.data['BillRefNumber']
        invoice_number = request.data['InvoiceNumber']
        org_account_balance = request.data['OrgAccountBalance']
        third_party_transaction_id = request.data['ThirdPartyTransID']
        phone_number = request.data['MSISDN']
        first_name = request.data['FirstName']
        middle_name = request.data['MiddleName']
        last_name = request.data['LastName']

        c2bmodel_data = C2BPayment.objects.create(
            TransactionType=transaction_type,
            TransID=transaction_id,
            TransTime=transaction_time,
            TransAmount=transaction_amount,
            BusinessShortCode=business_short_code,
            BillRefNumber=bill_ref_number,
            InvoiceNumber=invoice_number,
            OrgAccountBalance=org_account_balance,
            ThirdPartyTransID=third_party_transaction_id,
            MSISDN=phone_number,
            FirstName=first_name,
            MiddleName=middle_name,
            LastName=last_name,
        )

        c2bmodel_data.save()
        c2b_data = C2BPayment.objects.all()
        data = C2BPaymentSerializer(c2b_data, many=True)
        c2b_context = {
            "Result Code": 0,
            "Data": data
        }

        return Response(c2b_context)


# class MakeC2BPayment(ModelViewSet):
#     queryset = C2BPayment.objects.all()
#     serializer_class = C2BPaymentSerializer

#     def get_queryset(self):
#         register_url()

#         phonenumber = self.request.query_params.get('phone_number')
#         amount = self.request.query_params.get('amount')

#         payment = simulate_c2b_transaction(phonenumber, amount)
#         print(payment)
#         return super().get_queryset()
