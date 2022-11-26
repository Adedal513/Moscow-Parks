from django.contrib import admin
from django.contrib.gis import admin
from .models import Park
from django.conf import settings


class ParkAdmin(admin.GISModelAdmin):
    list_display = (
        'title',
        'description',
        'geofence',
        'address'
    )
    
    default_lat = settings.DEFAULT_ADMIN_LAT
    default_lon = settings.DEFAULT_ADMIN_LON

    search_fields = ('title',)


admin.site.register(Park, ParkAdmin)
