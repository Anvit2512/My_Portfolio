from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title