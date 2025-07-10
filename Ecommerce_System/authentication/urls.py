# from django.urls import path
# from authentication import views
# from core.views import index
# urlpatterns = [
#     path('register/', views.register_view, name='register'),
# ]
from django.urls import path
from .views import RegisterView, UserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
app_name = 'authentication' 

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('user/', UserView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]
