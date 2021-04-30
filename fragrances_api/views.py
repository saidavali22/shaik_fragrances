from rest_framework import viewsets
from django.http import HttpResponse , JsonResponse
from .serializers import AddproductSerializer
from .models import Addproduct
from django.shortcuts import render



from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request):
    return render(request, "index.html")

def adminn(request):
    return render(request, "index.html")

def collections(request , id):
    return render(request, "index.html")

# @api_view(['POST'])

    
    # return HttpResponse("Hello, world. You're at the polls index.")
    
class BookViewSet(viewsets.ModelViewSet):
    queryset = Addproduct.objects.all()
    serializer_class = AddproductSerializer 
    
    def post(self, request, *args, **kwargs):
        cover = request.data['cover']
        Book.objects.create(cover=cover)
        return HttpResponse({'message': 'Book created'}, status=200)
