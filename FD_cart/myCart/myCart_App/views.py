from email import message
from glob import glob
from django.shortcuts import render,redirect
from pytz import timezone
from datetime import datetime
from django.core.files.storage import FileSystemStorage

from django.contrib import messages

# Create your views here.

#this function returns home page that is shopping cart page
def home(request):
    return render(request,'home.html')

def category_list(request):
    return render(request,'category_list.html')    