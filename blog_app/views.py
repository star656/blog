
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from blog_app import models
from blog_app.models import User, Project
import requests

def index(request):
    # return HttpResponse('Hello world')
    users = User.objects.all()
    return render(request,'index.html',context={'users':users})

def login(request):
    # return render(request,'login.html')
    username = request.POST.get("username")
    password = request.POST.get("password")
    if request.method=="POST":
        if len(username) == 0 or len(password)==0:
            return render(request, 'login.html')
        else:
            users = User.objects.all()
            for user in users:
                if username == user.username and password == user.password:
                    return redirect('/blog/firstPage/')
            return JsonResponse({'code':0,'message':'账号或密码错误'})
    else:
        return render(request, 'login.html')

def loginpage(request):
    return redirect('/blog/login/')


def project(request):
    if request.method == "GET":
        url = request.GET.get("url")
        r =requests.get(url)
        return HttpResponse(r)
    elif request.method == "POST":
        url = request.POST.get("url")
        r = requests.get(url)
        return HttpResponse(r)


def projectList(request):
    if request.method == "GET":
        projects = Project.objects.all().order_by('-update_time')
        return render(request, 'projectList.html', context={'projects': projects})
    else:
        inquireProjectName = request.POST.get('inquireProjectName')
        print(inquireProjectName)
        if len(inquireProjectName) != 0:
            projects = Project.objects.filter(projectName=inquireProjectName)
            return render(request, 'projectList.html', context={'projects': projects})
        else:
            projects = Project.objects.all().order_by('-update_time')
            return render(request, 'projectList.html', context={'projects': projects})


def addProject(request):
    if request.method == 'POST':
        projectName = request.POST.get('projectName')
        projectType = request.POST.get('projectType')
        projectVersion = request.POST.get('projectVersion')
        projectDescribe = request.POST.get('projectDescribe')
        # print(projectName,projectType,projectVersion,projectDescribe)
        # print('保存成功')
        models.Project.objects.create(projectName=projectName,projectType=projectType,
                                      versionNumber=projectVersion,describe=projectDescribe,state=0)
        return JsonResponse({'code':1,'message':'添加成功'})


def firstPage(request):
    return render(request,'firstPage.html')


def monkeyTest(request):
    return HttpResponse('<h1>Monkey测试</h1>')


def ourInfo(request):
    return HttpResponse('关于我们')


def getProjectList(request):
    inquireProjectName = request.GET.get('inquireProjectName')
    if len(inquireProjectName) == 0:
        projects = Project.objects.all().order_by('-update_time')
        return render(request, 'projectList.html', context={'projects': projects})
    else:
        projects = Project.objects.filter(projectName=inquireProjectName)
        return render(request, 'projectList.html', context={'projects': projects})