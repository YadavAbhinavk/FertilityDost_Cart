from django.contrib import admin
from .models import Category,Brand,Product, ProductAtribut
# Register your models here.

admin.site.register(Category)
admin.site.register(Brand)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','title','brand','price','status')
    list_editable = ('status',)

admin.site.register(Product,ProductAdmin)

class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ('id','product','price')

admin.site.register(ProductAtribut,ProductAttributeAdmin)    
