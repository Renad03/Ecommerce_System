from django.db import models
from ..products.models import*
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
    
class WarehouseProduct(models.Model):
    warehouse_id = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)


# Store-Product (many-to-many)
class StoreProduct(models.Model):
    store_id = models.ForeignKey(Store, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    last_stocked_at = models.DateTimeField()

class Stock(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE, 
                                 related_name='stock_items', null=True, blank=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, 
                             related_name='stock_items', null=True, blank=True)
    quantity = models.IntegerField(default=0)
    reserved_quantity = models.IntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = [
            ('product', 'warehouse'),
            ('product', 'store'),
        ]
    
    def __str__(self):
        location = self.warehouse.name if self.warehouse else self.store.name
        return f"{self.product.name} - {location}: {self.quantity}"
    
    @property
    def available_quantity(self):
        return self.quantity - self.reserved_quantity
