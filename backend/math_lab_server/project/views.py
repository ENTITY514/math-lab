from django.shortcuts import render
from django.http import HttpRequest
from rest_framework import generics

from .serializers import ProjectSerializer
from .models import Project

# Create your views here.
def index(request):
    return HttpRequest("Hello world")

class ProjectAPI(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
