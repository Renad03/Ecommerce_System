from django.urls import path
from authentication import views
from core.views import index
app_name = 'authentication' 
urlpatterns = [
    path('register/', views.register_view, name='register'),
]