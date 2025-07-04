from enum import Enum
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password

class RoleEnum(Enum):
    ADMIN = "admin"
    SELLER = "seller"
    DELIVERY = "delivery"
    CUSTOMER = "customer"


# Roles
class Role(models.Model):
    name = models.CharField(max_length=50, choices=[(tag.value, tag.name.title()) for tag in RoleEnum])

    def __str__(self):
        return self.name


# Custom User
class User(AbstractUser):
    user_name = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    role = models.ForeignKey('Role', on_delete=models.CASCADE, null=True, blank=True)
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=20)

    def save(self, *args, **kwargs):
        # Hash the password only if it's not already hashed
        if self._state.adding or 'pbkdf2_' not in self.password:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username



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
