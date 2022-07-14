from django.contrib import admin
from django.urls import path
from myCart_App import views

urlpatterns = [
    path('', views.home ,name="home"),
    path('product_category', views.category_list ,name="category_list"),
]