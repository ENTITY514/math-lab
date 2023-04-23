from django.db import models


class Est(models.Model):
    project__oeifh_name: models.CharField(max_length=200)
    project_data: models.TextField("project data for build")
    pub_date: models.DateField("date of publication", auto_created=True)

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"

    def __str__(self):
        return self.project_name
