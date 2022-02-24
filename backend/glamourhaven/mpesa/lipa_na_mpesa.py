import requests

from keys import *
from mpesa import generate_password, get_access_token
from utils import get_formated_timestamp


def lipa_na_mpesa(phone_number, amount):

    api_url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    time_stamp = get_formated_timestamp()
    access_token = get_access_token()
    password = generate_password(time_stamp)

    headers = {
        'Authorization': f"Bearer {access_token}"
    }

    payload = {
        "BusinessShortCode": business_shortcode,
        "Password": password,
        "Timestamp": time_stamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phone_number,
        "PartyB": business_shortcode,
        "PhoneNumber": phone_number,
        "CallBackURL": CallBackURL,
        "AccountReference": "CompanyXLTD",
        "TransactionDesc": "Payment of X"
    }

    response = requests.request(
        "POST", api_url, headers=headers, json=payload)
    return response.json()
