from django.db import models

class Discount(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    reference = models.CharField(max_length=50)  # e.g., "store", "category"

    def __str__(self):
        return self.title
