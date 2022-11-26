from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Park
from .serializers import ParkSerializer


class GetParksView(APIView):
    def get(self, request):
        queryset = Park.objects.all()

        serializer_for_queryset = ParkSerializer(
            instance=queryset,
            many=True
        )

        return Response(serializer_for_queryset.data)
    