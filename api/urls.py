from django.urls import path
from .views import GetParksView


app_name = 'api'

urlpatterns = [
    path('all/', GetParksView.as_view(), name='all'),
]
