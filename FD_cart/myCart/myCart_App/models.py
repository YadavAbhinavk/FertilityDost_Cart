from tkinter import CASCADE
from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="media-images/")

    def __str__(self):
        return self.title

class Brand(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="media-images/")

    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="product_images/")
    # details = models.TextField()
    price = models.PositiveIntegerField()
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand,on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    
class ProductAtribut(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    price = models.PositiveBigIntegerField()

    def __str__(self):
        return self.product.title