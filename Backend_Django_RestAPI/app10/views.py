from django.shortcuts import render, redirect
from .models import info, Birthday, Wedding, Housewarming, Anniversary, Babyshower, Farewell_Retirement
from django.contrib import messages


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import (InfoSerializer, BirthdaySerializer,WeddingSerializer,HousewarmingSerializer,AnniversarySerializer,BabyshowerSerializer,Farewell_RetirementSerializer)

class RegisterView(APIView):

    def post(self, request):

        data = request.data.copy()

        # Check whether username already exists
        if info.objects.filter(username=data.get('username')).exists():
            return Response(
                {
                    "message": "Username already exists"
                },
                status=status.HTTP_400_BAD_REQUEST
            )


        serializer = InfoSerializer(data=data)

        if serializer.is_valid():

            serializer.save()

            return Response(
                {
                    "message": "Registration successful"
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class LoginView(APIView):

    def post(self, request):

        username = request.data.get('login_username')
        password = request.data.get('login_password')

        try:
            user = info.objects.get(username=username)
        except info.DoesNotExist:
            return Response(
                {"message": "Invalid username"},
                status=401
            )

        if password == user.password:

            return Response({
                "message": "Login successful"
            })

        return Response(
            {"message": "Invalid password"},
            status=401
        )

class ChangePasswordView(APIView):

    def put(self, request):

        username = request.data.get('username')
        new_password = request.data.get('new_password')

        try:
            user = info.objects.get(username=username)
        except info.DoesNotExist:
            return Response({
                "message": "User not found"
            }, status=404)

        user.password = new_password
        user.save()

        return Response({
            "message": "Password updated successfully"
        })

class BirthdayView(APIView):

    def post(self, request):

        relationship = request.data.get('birthday_relationship')
        interest = request.data.get('birthday_field_of_interest')
        budget = request.data.get('birthday_budget')
        gift_type = request.data.get('birthday_gift_type')

        birthdays = Birthday.objects.all()

        if relationship:
            birthdays = birthdays.filter(
                relationship__iexact=relationship
            )

        if interest:
            birthdays = birthdays.filter(
                interest__iexact=interest
            )

        if budget:
            birthdays = birthdays.filter(
                budget__iexact=budget
            )

        if gift_type:
            birthdays = birthdays.filter(
                gift_type__iexact=gift_type
            )

        serializer = BirthdaySerializer(
            birthdays,
            many=True
        )

        return Response(serializer.data)

class WeddingView(APIView):

    def post(self, request):

        budget = request.data.get('wedding_budget')
        gift_type = request.data.get('wedding_gift_type')
        category = request.data.get('wedding_category')
        gift_preferences = request.data.get('wedding_gift_preferences')

        weddings = Wedding.objects.all()

        if budget:
            weddings = weddings.filter(
                budget__iexact=budget
            )

        if gift_type:
            weddings = weddings.filter(
                gift_type__iexact=gift_type
            )

        if category:
            weddings = weddings.filter(
                category__iexact=category
            )

        if gift_preferences:
            weddings = weddings.filter(
                gift_preferences__iexact=gift_preferences
            )

        serializer = WeddingSerializer(
            weddings,
            many=True
        )

        return Response(serializer.data)

class HousewarmingView(APIView):

    def post(self, request):

        budget = request.data.get('housewarming_budget')
        gift_type = request.data.get('housewarming_gift_type')
        category = request.data.get('housewarming_category')
        gift_preferences = request.data.get('housewarming_gift_preferences')

        housewarmings = Housewarming.objects.all()

        if budget:
            housewarmings = housewarmings.filter(
                budget__iexact=budget
            )

        if gift_type:
            housewarmings = housewarmings.filter(
                gift_type__iexact=gift_type
            )

        if category:
            housewarmings = housewarmings.filter(
                category__iexact=category
            )

        if gift_preferences:
            housewarmings = housewarmings.filter(
                gift_preferences__iexact=gift_preferences
            )

        serializer = HousewarmingSerializer(
            housewarmings,
            many=True
        )

        return Response(serializer.data)

class AnniversaryView(APIView):

    def post(self, request):

        budget = request.data.get('anniversary_budget')
        gift_type = request.data.get('anniversary_gift_type')
        gift_preferences = request.data.get('anniversary_gift_preferences')
        category = request.data.get('anniversary_category')

        anniversaries = Anniversary.objects.all()

        if budget:
            anniversaries = anniversaries.filter(
                budget__iexact=budget
            )

        if gift_type:
            anniversaries = anniversaries.filter(
                gift_type__iexact=gift_type
            )

        if gift_preferences:
            anniversaries = anniversaries.filter(
                gift_preferences__iexact=gift_preferences
            )

        if category:
            anniversaries = anniversaries.filter(
                category__iexact=category
            )

        serializer = AnniversarySerializer(
            anniversaries,
            many=True
        )

        return Response(serializer.data)

class BabyshowerView(APIView):

    def post(self, request):

        budget = request.data.get('babyshower_budget')
        gift_type = request.data.get('babyshower_gift_type')
        category = request.data.get('babyshower_category')
        gift_preferences = request.data.get('babyshower_gift_preferences')

        babyshowers = Babyshower.objects.all()

        if budget:
            babyshowers = babyshowers.filter(
                budget__iexact=budget
            )

        if gift_type:
            babyshowers = babyshowers.filter(
                gift_type__iexact=gift_type
            )

        if category:
            babyshowers = babyshowers.filter(
                category__iexact=category
            )

        if gift_preferences:
            babyshowers = babyshowers.filter(
                gift_preferences__iexact=gift_preferences
            )

        serializer = BabyshowerSerializer(
            babyshowers,
            many=True
        )

        return Response(serializer.data)

class FarewellRetirementView(APIView):

    def post(self, request):

        occassion_type = request.data.get('farewellretirement_occassion_type')
        budget = request.data.get('farewellretirement_budget')
        gift_type = request.data.get('farewellretirement_gift_type')
        category = request.data.get('farewellretirement_category')
        gift_preferences = request.data.get('farewellretirement_gift_preferences')

        farewell = Farewell_Retirement.objects.all()

        if occassion_type:
            farewell = farewell.filter(
                occassion_type__iexact=occassion_type
            )

        if budget:
            farewell = farewell.filter(
                budget__iexact=budget
            )

        if gift_type:
            farewell = farewell.filter(
                gift_type__iexact=gift_type
            )

        if category:
            farewell = farewell.filter(
                category__iexact=category
            )

        if gift_preferences:
            farewell = farewell.filter(
                gift_preferences__iexact=gift_preferences
            )

        serializer = Farewell_RetirementSerializer(
            farewell,
            many=True
        )

        return Response(serializer.data)

def login(request):
    return render(request, "login.html")

def occassiondatas(request):
    return render(request,"occassiondatas.html")

def forgotpassword(request):
    return render(request, "forgotpassword.html")

def registration(request):
    return render(request, "registration.html")

def userdata(request):
    info_1 = info.objects.all().values()
    data = {"userdata" : info_1}
    return render(request, "datas/datas.html", data)

def loginprocess(request):
    username = request.POST.get("username")
    password = request.POST.get("password")

    if not info.objects.filter(username=username).exists():
        return render(request, "login.html", {
            "error": "Username is invalid"
        })

    if not info.objects.filter(
        username=username,
        password=password
    ).exists():
        return render(request, "login.html", {
            "error": "Password is invalid"
        })

    return render(request, "homepage.html")

def forgotpasswordprocess(request):
    username = request.POST.get("username1")
    password = request.POST.get("password1")
    confirm_password = request.POST.get("confirm_password1")

    if info.objects.filter(username=username).exists():
        if password == confirm_password:
            info.objects.filter(username=username).update(password=password)
            messages.success(request, "password updated successfully")
            return render(request, "login.html")
        else:
            return render(request, "forgotpassword.html", {
                "error": "Passwords do not match"
            })

    else:
        return render(request, "forgotpassword.html", {
            "error" : "username did not exist."
        })




def registrationprocess(request):
    f_name = request.POST.get("fullname")
    email = request.POST.get("email")
    mobile_no = request.POST.get("mobile_no")
    u_name = request.POST.get("username")
    pwd  = request.POST.get("password")
    c_pwd = request.POST.get("confirm_password")

    if pwd != c_pwd:
        return render(request, "registration.html", {
            "error": "Passwords do not match"
        })

    if info.objects.filter(username=u_name).exists():
        return render(request, "registration.html", {
            "error": "Username already exists"
        })

    user = info(
        fullname=f_name,
        email=email,
        mobile_no=mobile_no,
        username=u_name,
        password=pwd
    )

    user.save()
    messages.success(request, "user registered successfully")
    return redirect("login")

def homepage(request):
    return render(request, "homepage.html")

def birthday(request):
    return render(request, "birthday.html")

def wedding(request):
    return render(request, "wedding.html")

def housewarming(request):
    return render(request, "housewarming.html")

def anniversary(request):
    return render(request, "anniversary.html")

def babyshower(request):
    return render(request, "babyshower.html")

def farewellretirement(request):
    return render(request, "farewellretirement.html")

def birthdaydatas(request):
    birthdaydatas = Birthday.objects.all().values()

    return render(request, "datas/birthdaydatas.html", {
        "userdata1": birthdaydatas
    })

def weddingdatas(request):
    weddingdatas = Wedding.objects.all().values()

    return render(request, "datas/weddingdatas.html", {
            "userdata1": weddingdatas
    })

def housewarmingdatas(request):
    housewarmingdatas = Housewarming.objects.all().values()

    return render(request, "datas/housewarmingdatas.html", { 
            "userdata1": housewarmingdatas
    })

def anniversarydatas(request):
    anniversarydatas = Anniversary.objects.all().values()
    return render(request, "datas/anniversarydatas.html", {
            "userdata1" : anniversarydatas
    })

def babyshowerdatas(request):
    babyshowerdatas = Babyshower.objects.all().values()
    return render(request, "datas/babyshowerdatas.html", {
            "userdata1" : babyshowerdatas
    })

def farewellretirementdatas(request):
    farewellretirementdatas = Farewell_Retirement.objects.all().values()
    return render(request, "datas/farewellretirementdatas.html",{
            "userdata1" : farewellretirementdatas
    })


def birthdaysuggestionprocess(request):
    relationship11 = request.POST.get("relationship11")
    interest11 = request.POST.get("interest11")
    budget11 = request.POST.get("budget11")
    gift_type11 = request.POST.get("gift_type11")
    

    birthday = Birthday.objects.filter(relationship = relationship11, interest = interest11, 
    budget = budget11, gift_type = gift_type11)


    return render(request, "birthday_suggestion.html", {"birthdaydata" : birthday})

def weddingsuggestionprocess(request):
    budget11 = request.POST.get("budget")
    gift_type11 = request.POST.get("gift_type")
    category11 = request.POST.get("category")
    gift_preferences11 = request.POST.get("gift_preferences")

    wedding = Wedding.objects.filter(budget=budget11, gift_type=gift_type11, category=category11, gift_preferences=gift_preferences11)
    return render(request, "wedding_suggestion.html", {"weddingdata" : wedding})


def housewarmingsuggestionprocess(request):
    budget11 = request.POST.get("budget")
    gift_type11 = request.POST.get("gift_type")
    category11 = request.POST.get("category")
    gift_preferences11 = request.POST.get("gift_preferences")

    housewarming = Housewarming.objects.filter(budget=budget11, gift_type=gift_type11, category=category11, gift_preferences=gift_preferences11)
    return render(request, "housewarming_suggestion.html", {"housewarmingdata" : housewarming})


def anniversarysuggestionprocess(request):
    budget11 = request.POST.get("budget")
    gift_type11 = request.POST.get("gift_type")
    category11 = request.POST.get("category")
    gift_preferences11 = request.POST.get("gift_preferences")

    anniversary = Anniversary.objects.filter(budget=budget11, gift_type=gift_type11, category=category11, gift_preferences=gift_preferences11)
    return render(request, "anniversary_suggestion.html", {"anniversarydata" : anniversary})

def babyshowersuggestionprocess(request):
    budget11 = request.POST.get("budget")
    gift_type11 = request.POST.get("gift_type")
    category11 = request.POST.get("category")
    gift_preferences11 = request.POST.get("gift_preferences")

    babyshower = Babyshower.objects.filter(budget=budget11, gift_type=gift_type11, category=category11, gift_preferences=gift_preferences11)
    return render(request, "babyshower_suggestion.html", {"babyshowerdata" : babyshower})

def farewellretirementsuggestionprocess(request):
    occassion_type11 = request.POST.get("occasion_type")
    budget11 = request.POST.get("budget")
    gift_type11 = request.POST.get("gift_type")
    category11 = request.POST.get("category")
    gift_preferences11 = request.POST.get("gift_preferences")

    farewellretirement = Farewell_Retirement.objects.filter(occassion_type=occassion_type11, budget=budget11, gift_type=gift_type11, category=category11, gift_preferences=gift_preferences11)
    return render(request, "farewellretirement_suggestion.html", {"farewellretirementdata" : farewellretirement})