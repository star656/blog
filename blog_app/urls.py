from django.urls import path

from blog_app import views

urlpatterns = [
    path('index/', views.index, name="index"),
    path('login/',views.login,name = "login"),
    path('project/',views.project,name="project"),
    path('projectList/',views.projectList,name="projectList"),
    path('addProject',views.addProject,name="addProject"),
    path('firstPage',views.firstPage,name='firstPage'),
    path('monkeyTest',views.monkeyTest,name='monkeyTest'),
    path('ourInfo',views.ourInfo,name='ourInfo')
]
