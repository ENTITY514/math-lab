from django.db import models


class Project(models.Model):
    name: models.CharField("project name", max_length=200)
    data: models.TextField("project data for build")
    pub_date: models.DateField("date of publication")

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"

    def __str__(self):
        return self.name
