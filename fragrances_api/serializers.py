from rest_framework import serializers
from .models import Addproduct
class AddproductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Addproduct
        fields = '__all__'