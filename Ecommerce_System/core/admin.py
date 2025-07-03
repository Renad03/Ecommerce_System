from django.contrib import admin
from .models import User, Role, Category, Discount, Warehouse, Store, Product, ProductImage, WarehouseProduct, StoreProduct, PaymentMethod, Status, Order, OrderProduct

admin.site.register(User)
admin.site.register(Role)
admin.site.register(Category)
admin.site.register(Discount)
admin.site.register(Warehouse)
admin.site.register(Store)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(WarehouseProduct)
admin.site.register(StoreProduct)
admin.site.register(PaymentMethod)
admin.site.register(Status)
admin.site.register(Order)
admin.site.register(OrderProduct)
