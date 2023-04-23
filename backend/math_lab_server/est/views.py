from django.shortcuts import render
from django.http import HttpRequest
from rest_framework import viewsets

from .serializers import EstSerializer
from .models import Est


def index(request):
    return HttpRequest("Hello world")


class EstAPI(viewsets.ModelViewSet):
    queryset = Est.objects.all()
    serializer_class = EstSerializer
