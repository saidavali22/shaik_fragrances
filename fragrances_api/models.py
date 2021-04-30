from django.db import models

# Create your models here.
class Addproduct(models.Model):
    product_name=models.TextField(blank=True)
    product_price=models.TextField(blank=True)
    product_category=models.TextField(blank=True)
    product_size=models.TextField(blank=True)
    product_img = models.ImageField(blank=True, null=True , upload_to='./addproduct/' )
