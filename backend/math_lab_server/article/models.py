from django.db import models


class Article(models.Model):
    name: models.CharField("article name", max_length=200)
    text: models.TextField("text of article")
    pub_date: models.DateField("date of publication")

    class Meta:
        verbose_name = "Статья"
        verbose_name_plural = "Статьи"


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    author_name: models.CharField("article name", max_length=50)
    comment_text: models.CharField("article name", max_length=500)

    class Meta:
        verbose_name = "Комментарий"
        verbose_name_plural = "Комментарии"
