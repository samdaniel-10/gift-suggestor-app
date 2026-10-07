from django.urls import path
from . import views

from .views import (
    RegisterView,
    LoginView,
    ChangePasswordView,
    BirthdayView,
    WeddingView,
    HousewarmingView,
    AnniversaryView,
    BabyshowerView,
    FarewellRetirementView
)


urlpatterns = [

    # User APIs
    path('register_1/', RegisterView.as_view()),
    path('login_1/', LoginView.as_view()),
    path('change-password_1/', ChangePasswordView.as_view()),

    # Gift APIs
    path('birthday_1/', BirthdayView.as_view()),
    path('wedding_1/', WeddingView.as_view()),
    path('housewarming_1/', HousewarmingView.as_view()),
    path('anniversary_1/', AnniversaryView.as_view()),
    path('babyshower_1/', BabyshowerView.as_view()),
    path('farewellretirement_1/', FarewellRetirementView.as_view()),

    path('login/', views.login, name = "login" ),
    path('occassiondatas/', views.occassiondatas, name = "occassiondatas" ),
    path('login/loginprocess/', views.loginprocess, name = "loginprocess" ),
    path('forgotpassword/', views.forgotpassword, name="forgotpassword"),
    path('forgotpasswordprocess/', views.forgotpasswordprocess, name="forgotpasswordprocess"),
    path('registration/', views.registration, name = "registration" ),
    path('registrationprocess/', views.registrationprocess, name = "registrationprocess" ),
    path('userdata/', views.userdata, name="userdata"),
    path('login/loginprocess/homepage/', views.homepage, name='homepage'),

    path('login/loginprocess/homepage/birthday/', views.birthday, name = "birthday"),
    path('login/loginprocess/homepage/wedding/', views.wedding, name = "wedding"),
    path('login/loginprocess/homepage/housewarming/', views.housewarming, name = "housewarming"),
    path('login/loginprocess/homepage/anniversary/', views.anniversary, name = "anniversary"),
    path('login/loginprocess/homepage/babyshower/', views.babyshower, name = "babyshower"),
    path('login/loginprocess/homepage/farewellretirement/', views.farewellretirement, name = "farewellretirement"),

    path('birthdaydatas/', views.birthdaydatas, name = "birthdaydatas"),
    path('weddingdatas/', views.weddingdatas, name = "weddingdatas"),
    path('housewarmingdatas/', views.housewarmingdatas, name = "housewarmingdatas"),
    path('anniversarydatas/', views.anniversarydatas, name = "anniversarydatas"),
    path('babyshowerdatas/', views.babyshowerdatas, name = "babyshowerdatas"),
    path('farewellretirementdatas/', views.farewellretirementdatas, name = "farewellretirementdatas"),

    path('login/loginprocess/homepage/birthday/birthdaysuggestionprocess/', views.birthdaysuggestionprocess, name = "birthdaysuggestionprocess"),
    path('login/loginprocess/homepage/wedding/weddingsuggestionprocess/', views.weddingsuggestionprocess, name = "weddingsuggestionprocess"),
    path('login/loginprocess/homepage/housewarming/housewarmingsuggestionprocess/', views.housewarmingsuggestionprocess, name = "housewarmingsuggestionprocess"),
    path('login/loginprocess/homepage/anniversary/anniversarysuggestionprocess/', views.anniversarysuggestionprocess, name = "anniversarysuggestionprocess"),
    path('login/loginprocess/homepage/babyshower/babyshowersuggestionprocess/', views.babyshowersuggestionprocess, name = "babyshowersuggestionprocess"),
    path('login/loginprocess/homepage/farewellretirement/farewellretirementsuggestionprocess/', views.farewellretirementsuggestionprocess, name = "farewellretirementsuggestionprocess"),
]

