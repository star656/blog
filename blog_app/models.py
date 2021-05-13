from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=128)
    class Meta:
        db_table = 'user'

class Project(models.Model):
    projectName = models.CharField(max_length=50)
    projectType = models.CharField(max_length=20)
    versionNumber = models.CharField(max_length=20)
    describe = models.CharField(max_length=200)
    create_time = models.DateTimeField(auto_now=True)
    update_time = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=2)

    class Meta:
        db_table = 'project'
