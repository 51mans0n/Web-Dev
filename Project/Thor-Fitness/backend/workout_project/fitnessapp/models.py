from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class WorkoutPlan(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

class Week(models.Model):
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    number = models.IntegerField()

class WorkoutSession(models.Model):
    week = models.ForeignKey(Week, on_delete=models.CASCADE)
    day = models.CharField(max_length=10)
    # Monday, Wednesday, Friday

class Exercise(models.Model):
    workout_session = models.ForeignKey(WorkoutSession, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    video_url = models.URLField()
