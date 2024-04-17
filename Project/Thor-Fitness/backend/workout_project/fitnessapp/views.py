from rest_framework import generics
from .models import WorkoutPlan, Week, WorkoutSession, Exercise
from .serializers import (
    WorkoutPlanSerializer,
    WeekSerializer,
    WorkoutSessionSerializer,
    ExerciseSerializer
)

class WorkoutPlanListCreate(generics.ListCreateAPIView):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer

class WorkoutPlanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer

class WeekListCreate(generics.ListCreateAPIView):
    serializer_class = WeekSerializer

    def get_queryset(self):
        workoutplan_id = self.kwargs.get('workoutplan_id')
        return Week.objects.filter(workout_plan__id=workoutplan_id)

class WeekDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Week.objects.all()
    serializer_class = WeekSerializer

class WorkoutSessionListCreate(generics.ListCreateAPIView):
    serializer_class = WorkoutSessionSerializer

    def get_queryset(self):
        week_id = self.kwargs.get('week_id')
        return WorkoutSession.objects.filter(week__id=week_id)

class WorkoutSessionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutSession.objects.all()
    serializer_class = WorkoutSessionSerializer

class ExerciseListCreate(generics.ListCreateAPIView):
    serializer_class = ExerciseSerializer

    def get_queryset(self):
        workoutsession_id = self.kwargs.get('workoutsession_id')
        return Exercise.objects.filter(workout_session__id=workoutsession_id)

class ExerciseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
