from django.contrib import admin
from django.urls import path, include
from core.views import index

app_name = 'core'
urlpatterns = [
    path('', index, name='index'),  # Home page
    path('user/', include('authentication.urls', namespace='authentication')),
]