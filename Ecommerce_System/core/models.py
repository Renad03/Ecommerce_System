from enum import Enum
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.hashers import make_password

class RoleEnum(Enum):
    ADMIN = "admin"
    SELLER = "seller"
    DELIVERY = "delivery"
    CUSTOMER = "customer"

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if not password:
            raise ValueError("Superuser must have a password")

        return self.create_user(email, password, **extra_fields)


class Role(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class User(AbstractUser):
    username = None 
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20)
    address = models.TextField(blank=True, null=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True, default=1)

    USERNAME_FIELD = 'email' 
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number']

    objects = CustomUserManager()

    def __str__(self):
        return self.email


# Category
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# Discount
class Discount(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    reference = models.CharField(max_length=50)  # e.g., "store", "category"

    def __str__(self):
        return self.title


# Warehouse
class Warehouse(models.Model):
    city = models.CharField(max_length=100)
    total_capacity = models.IntegerField()
    available_capacity = models.IntegerField()
    last_stocked_at = models.DateTimeField()

    def __str__(self):
        return f"{self.city} Warehouse"


# Store
class Store(models.Model):
    city = models.CharField(max_length=100)
    total_capacity = models.IntegerField()
    available_capacity = models.IntegerField()

    def __str__(self):
        return f"Store in {self.city}"


# Product
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    warehouse_id= models.ForeignKey(Warehouse, on_delete=models.SET_NULL, null=True, blank=True)
    store_id = models.ForeignKey(Store, on_delete=models.SET_NULL, null=True, blank=True)
    category_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_id = models.ForeignKey(Discount, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name


# Product Images
class ProductImage(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image_url = models.URLField()

    def __str__(self):
        return f"Image for {self.product.name}"


# Warehouse-Product (many-to-many)
class WarehouseProduct(models.Model):
    warehouse_id = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)


# Store-Product (many-to-many)
class StoreProduct(models.Model):
    store_id = models.ForeignKey(Store, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    last_stocked_at = models.DateTimeField()


# Payment Methods
class PaymentMethod(models.Model):
    option = models.CharField(max_length=50)

    def __str__(self):
        return self.option


# Status
class Status(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


# Order
class Order(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='orders')
    delivery_man_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='deliveries')
    address = models.TextField()
    status_id = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True)
    payment_method_id = models.ForeignKey(PaymentMethod, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"Order #{self.id}"


# Order-Product (many-to-many)
class OrderProduct(models.Model):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE) 
