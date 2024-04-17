from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveUpdateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class CompanyVacanciesList(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs.get('id')
        return Vacancy.objects.filter(company__id=company_id)

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class TopTenVacanciesList(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
