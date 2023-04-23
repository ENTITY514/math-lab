from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('api/v1/auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    path('api/v1/projects/', include("project.urls")),
    path('api/v1/est/', include("est.urls")),
    path('admin/', admin.site.urls),
]
