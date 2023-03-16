from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='null'),
    path('reg', views.reg, name='null'),
]
