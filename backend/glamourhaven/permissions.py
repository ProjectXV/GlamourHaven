from rest_framework import permissions
from . models import Client, Employee, User


class IsManager(permissions.BasePermission):
    """
    Custom permission to only allow the website managers to do management tasks.
    """

    def has_permission(self, request, view):
        """Checks if an employee is a super user which is a determinant of whether they
        are managers or not"""
        if User.objects.get(id=request.user.id).is_staff:
            return True


class HasAccountPermission(permissions.BasePermission):
    """
    Custom permission to only allow an authorized Account owners to update their accounts.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.user == request.user:
            return True


class IsClient(permissions.BasePermission):
    """
    Custom permission to restrict some actions only to clients.
    """

    def has_permission(self, request, veiw):
        # permission is only allowed to clients.
        if Client.objects.filter(user=request.user).exists():
            return True


class IsEmployee(permissions.BasePermission):
    """
    Custom permission to only allow a registered and logged in Employee to manage their accounts.
    """

    def has_permission(self, request, veiw):
        # permissions are only allowed to Employees.
        if Employee.objects.filter(user=request.user).exists():
            return True


class HasClientOrderPermission(permissions.BasePermission):
    """
    Custom permission to only allow an authorized Clients to view their orders.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.placer.user == request.user:
            return True


class HasClientAppointmentPermission(permissions.BasePermission):
    """
    Custom permission to only allow an authorized Clients to view their orders.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.client.user == request.user:
            return True
