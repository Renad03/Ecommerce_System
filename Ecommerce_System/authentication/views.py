from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from authentication.forms import UserRegistrationForm

from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterSerializer, UserSerializer, LoginSerializer

User = get_user_model()

# HTML-based register view
def register_view(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            login(request, new_user)
            username = form.cleaned_data.get('username')
            messages.success(request, f"Hey {username}, your account has been created successfully.")
            return redirect('core:index')
        else:
            print("Form is not valid")
            print(form.errors)
    else:
        form = UserRegistrationForm()
    
    context = {
        'form': form
    }
    return render(request, 'authentication/register.html', context)

# API: Register
@api_view(['POST'])
def register_api_view(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# API: Login
@api_view(['POST'])
def login_api_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(request, email=email, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        serializer = UserSerializer(user)
        return Response({
            'token': str(refresh.access_token),
            'user': serializer.data,
            'message': 'Login successful'
        })
    else:
        return Response({'error': 'Invalid credentials'}, status=401)
    
# API: Authenticated user profile
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile_view(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_by_email(request):
    email = request.query_params.get('email')
    if not email:
        return Response({'error': 'Email parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.get(email=email)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)