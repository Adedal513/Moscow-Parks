from django.contrib import admin

from .models import Park


class ParkAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'description',
        'geofence',
        'address'
    )

    search_fields = ('title',)


admin.site.register(Park, ParkAdmin)
