from rest_framework import serializers
from .models import Est

class EstSerializer(serializers.ModelSerializer):
    class Meta:
        model = Est
        fields = ('project__oeifh_name','project_data')