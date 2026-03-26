from django.urls import path
from . import views

urlpatterns = [
    path("templates/", views.templates_list, name="templates_list"),
    path("templates/<int:pk>/", views.template_detail, name="template_detail"),
]
