from django.urls import path
from .views import SubmitFormView
from . import views


# from django.contrib import admin
# from django.urls import path, re_path


# def render_react(request):
#     return render(request, 'index.html')

urlpatterns = [

    # path('', views.index, name='index'),
    path('', views.myview, name='index'),
  

    path('submit-form/', SubmitFormView.as_view(), name='submit-form'),

    path('navbar-links/', views.NavbarLinkList.as_view(), name='navbar-link-list'),
    path('navbar-links/<int:pk>/', views.NavbarLinkDetail.as_view(), name='navbar-link-detail'),

    path('firstsection/', views.firstsection),
    path('secondsection/', views.secondsection),
    path("thirdsection/", views.thirdsection),
    path('fourthsection/', views.fourthsection),
    path('fourthsectionbanner/', views.fourthsectionbanner),
    path('fifthsection/', views.fifthsection),
    path('fifthsectioncontent/', views.fifthsectioncontent),
    path('sixthsection/', views.sixthsection),
    path('sixthsectiontest/',views.sixthsectiontest),
    path('seventhsection/', views.seventhsection),
    path('eighthsection/', views.eighthsection),

    path('whatsapp/', views.whatsapp),

    path('dmfirstsection/', views.dmfirstsection),
    path('dmsecondsection/', views.dmsecondsection),
    path('facebookpage/', views.facebookpage),
    path('instagrampage/', views.instagrampage),
    path('youtubepage/', views.youtubepage),
    path('googlepage/', views.googlepage),

    path('socialmediapostercontent/', views.socialmediapostercontent),
    path('socialmediaposterimages/', views.socialmediaposterimages),
    path('packagedesigncontent/', views.packagedesigncontent),
    path('packagedesignimage/', views.packagedesignimage),
    path('logoworkcontent/', views.logoworkcontent),
    path('logoworkimage/', views.logoworkimage),
    path('uiuxcontent/', views.uiuxcontent),
    path('uiuximage/', views.uiuximage),
    path('videomarketingcontent/', views.videomarketingcontent),
    path('videomarketingvideo/', views.videomarketingvideo),
    path('servicepage/', views.servicepage),
    path('servicepageicon/', views.servicepageicon),
    path('webdevelopmentservice/', views.webdevelopmentservice),
    path('webdesignservice/', views.webdesignservice),
    path('ecommerceservice/', views.ecommerceservice),
    path('deliveryservice/', views.deliveryservice),
    path('paidpromotionads/', views.paidpromotionads),
    path('paidfacebookpage/', views.paid_facebookpage),
    path('paidyoutubepage/', views.paid_youtubepage),
    path('paidinstagrampage/', views.paid_instagrampage),
    path('paidgooglepage/', views.paid_googlepage),
    

    #### seo all section url

    path('seofirstsection/', views.seofirstsection),
    path('seosecondsection/', views.seosecondsection),
    path('seothirdsection/', views.seothirdsection),
    
    
    ### second section:
    # path('secondsection/', views.SecondsectionList.as_view(), name='secondsection-list'),
    # path('secondsection/<int:pk>/', views.SecondsectionDetail.as_view(), name='secondsection-detail'),
   
    ### third section:
    # path('thirdsection/', views.ThirdsectionList.as_view(), name='thirdsection-list'),
    # path('thirdsection/<int:pk>/', views.ThirdsectionDetail.as_view(), name='thirdsection-detail'),
    
    # ### fourth section:
    # path('fourthsection/', views.FourthsectionList.as_view(), name='fourthsection-list'),
    # path('fourthsection/<int:pk>/', views.FourthsectionDetail.as_view(), name='fourthsection-detail'),
    
    ### fifth section:
    # path('fifthsection/', views.FifthsectionList.as_view(), name='fifthsection-list'),
    # path('fifthsection/<int:pk>/', views.FifthsectionDetail.as_view(), name='fifthsection-detail'),
    # path('fifthsectioncontent/', views.FifthsectioncontentList.as_view(), name='fifthsectioncontent-list'),
    # path('fifthsectioncontent/<int:pk>/', views.FifthsectioncontentDetail.as_view(), name='fifthsectioncontent-detail'),
   
    #### sixth section:
    # path('sixthsection/', views.SixthsectionList.as_view(), name='sixthsection-list'),
    # path('sixthsection/<int:pk>/', views.SixthsectionDetail.as_view(), name='Sixthsection-Detail'),
    # path('sixthsectiontest/', views.SixthsectiontestList.as_view(), name='Sixthsectiontest-List'),
    # path('sixthsectiontest/<int:pk>/', views.SixthsectiontestDetail.as_view(), name='Sixthsectiontest-Detail'),
    
    ### seventh section:
    # path('seventhsection/', views.SeventhsectionList.as_view(), name='seventhsection-list'),
    # path('seventhsection/<int:pk>/', views.SeventhsectionDetail.as_view(), name='seventhsection-detail'),
    
    # ### eighth section:
    # path('eighthsection/', views.EighthsectionList.as_view(), name='eighthsection-list'),
    # path('eighthsection/<int:pk>/', views.EighthsectionDetail.as_view(), name='eighthsection-detail')
]


################################