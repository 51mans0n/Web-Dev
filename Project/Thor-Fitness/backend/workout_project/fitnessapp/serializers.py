from rest_framework import serializers
from .models import WorkoutPlan, Week, WorkoutSession, Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class WorkoutSessionSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True, read_only=True)

    class Meta:
        model = WorkoutSession
        fields = '__all__'

class WeekSerializer(serializers.ModelSerializer):
    workout_sessions = WorkoutSessionSerializer(many=True, read_only=True)

    class Meta:
        model = Week
        fields = '__all__'

class WorkoutPlanSerializer(serializers.ModelSerializer):
    weeks = WeekSerializer(many=True, read_only=True)

    class Meta:
        model = WorkoutPlan
        fields = '__all__'
