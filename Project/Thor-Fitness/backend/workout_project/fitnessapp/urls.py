from django.urls import path
from .views import (
    WorkoutPlanListCreate,
    WorkoutPlanDetail,
    WeekListCreate,
    WeekDetail,
    WorkoutSessionListCreate,
    WorkoutSessionDetail,
    ExerciseListCreate,
    ExerciseDetail
)

urlpatterns = [
    # WorkoutPlan routes
    path('workout-plans/', WorkoutPlanListCreate.as_view(), name='workout-plan-list'),
    path('workout-plans/<int:pk>/', WorkoutPlanDetail.as_view(), name='workout-plan-detail'),
    
    # Week routes under a specific WorkoutPlan
    path('workout-plans/<int:workoutplan_id>/weeks/', WeekListCreate.as_view(), name='week-list'),
    path('workout-plans/<int:workoutplan_id>/weeks/<int:pk>/', WeekDetail.as_view(), name='week-detail'),
    
    # WorkoutSession routes under a specific Week
    path('workout-plans/<int:workoutplan_id>/weeks/<int:week_id>/sessions/', WorkoutSessionListCreate.as_view(), name='workout-session-list'),
    path('workout-plans/<int:workoutplan_id>/weeks/<int:week_id>/sessions/<int:pk>/', WorkoutSessionDetail.as_view(), name='workout-session-detail'),
    
    # Exercise routes under a specific WorkoutSession
    path('workout-sessions/<int:workoutsession_id>/exercises/', ExerciseListCreate.as_view(), name='exercise-list'),
    path('workout-sessions/<int:workoutsession_id>/exercises/<int:pk>/', ExerciseDetail.as_view(), name='exercise-detail'),
]
