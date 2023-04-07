from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='project page'),
    path('api/v1/project_data', views.ProjectAPI.as_view(), name='project api'),
]