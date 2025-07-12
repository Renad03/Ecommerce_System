from django.db import models

class PaymentMethod(models.Model):
    option = models.CharField(max_length=50)

    def __str__(self):
        return self.option
    
class Payment(models.Model):
    PAYMENT_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('refunded', 'Refunded'),
    ]