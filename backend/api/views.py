from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken

from users.models import User

from api.serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({"message": "OK"}, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(
                {"message": "BAD REQUEST"}, status=status.HTTP_400_BAD_REQUEST
            )
