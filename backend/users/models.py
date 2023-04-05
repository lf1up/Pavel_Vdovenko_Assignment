from django.db import models
from django.dispatch import receiver
from django.db.models.signals import pre_save
from django.core.validators import EmailValidator
from django.contrib.auth.models import (
    AbstractUser,
    UserManager,
    UnicodeUsernameValidator,
)
from django.utils.translation import gettext_lazy as _


class County(models.Model):
    name = models.CharField(max_length=60)
    code = models.CharField(max_length=3)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=60)
    county = models.ForeignKey(County, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class CustomUserManager(UserManager):
    def create_superuser(self, email, password, username=None, **extra_fields):
        _username = username if username else email

        return self._create_user(
            email=email,
            password=password,
            username=_username,
            is_staff=True,
            is_superuser=True,
            **extra_fields
        )


class User(AbstractUser):
    username_validator = UnicodeUsernameValidator()
    email_validator = EmailValidator()

    email = models.EmailField(
        _("email address"),
        unique=True,
        validators=[email_validator],
        error_messages={
            "unique": _("A user with that email already exists."),
        },
    )
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        help_text=_("150 characters or fewer. Letters, digits and @/./+/-/_ only."),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
        null=True,
        blank=True,
    )

    gender = models.CharField(max_length=150, null=True, blank=True)
    age = models.PositiveSmallIntegerField(null=True, blank=True)

    city = models.ForeignKey(City, null=True, blank=True, on_delete=models.CASCADE)

    objects = CustomUserManager()


@receiver(pre_save, sender=User)
def give_default_username(sender, instance, *args, **kwargs):
    if not instance.username:
        instance.username = instance.email
    if not instance.first_name:
        instance.first_name = ""
    if not instance.last_name:
        instance.last_name = ""
