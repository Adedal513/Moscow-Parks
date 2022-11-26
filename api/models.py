import uuid

from django.db import models
from django.db.models import Model
from django.contrib.gis.db import models as gis_models


class Park(Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    title = models.CharField(
        max_length=100,
        blank=False,
        null=False,
        verbose_name='Название',
        help_text='Название парка'
    )
    address = models.CharField(
        max_length=150
    )
    description = models.TextField(
        max_length=500,
        verbose_name="Описание",
        help_text="Описание парка"
    )
    geofence = gis_models.PolygonField()

    class Meta:
        db_table = 'parks'
