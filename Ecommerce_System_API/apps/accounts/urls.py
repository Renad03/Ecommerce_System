from django.urls import path
from .views import register_api_view, login_api_view, user_profile_view, get_user_by_email
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
app_name = 'apps.accounts' 

urlpatterns = [
    path('register/', register_api_view),
    path('login/', login_api_view),
    path('profile/', user_profile_view),
    path('email/', get_user_by_email)
]
