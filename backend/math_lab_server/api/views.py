from django.shortcuts import render
from django.http import HttpResponse, HttpRequest


def index(request: HttpRequest):
    return HttpResponse("title:test")


def reg(request: HttpRequest):
    return HttpResponse("ghbdtn")
