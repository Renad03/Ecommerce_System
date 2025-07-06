from django.shortcuts import redirect, render
from authentication.forms import UserRegistrationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def register_view(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST or None)
        if form.is_valid():
            new_user = form.save()
            login(request, new_user)
            username = form.cleaned_data.get('username')
            messages.success(request, f"Hey {username}, your account has been created successfully.")
            new_user = authenticate(
                username,
                password=form.cleaned_data.get('password1')
            )

            return redirect('core:index')  # name of the home page URL
        if not form.is_valid():
            print("Form is not valid")
            print(form.errors)
    else:
        print("This user cannot be registered")
        form = UserRegistrationForm()

    
    context = {
        'form': form
    }
    if request.method == 'POST':
        # Handle registration logic here
        pass
    return render(request, 'authentication/register.html', context)
