from django.urls import path

from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
)

from api.views import RegisterView, ChangePasswordView, LogoutView, GetTokenPairView


urlpatterns = [
    path("register/", RegisterView.as_view(), name="auth_register"),
    path(
        "change-password/<int:pk>/",
        ChangePasswordView.as_view(),
        name="auth_change_password",
    ),
    path("login/", GetTokenPairView.as_view(), name="token_obtain_pair"),
    path("login/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("login/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("logout/", LogoutView.as_view(), name="auth_logout"),
]
