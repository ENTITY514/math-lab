from django.shortcuts import render
from django.http import HttpRequest
from rest_framework import generics, viewsets

from .serializers import ProjectSerializer
from .models import Project


def index(request):
    return HttpRequest("Hello world")


class ProjectAPI(viewsets.ModelViewSet):
    p = Project(project_name = "app", project_data="")
    p.save()
    print("create")
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
