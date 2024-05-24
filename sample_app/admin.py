# admin.py
from django.contrib import admin
# from .models import ContactForm, RecipientEmail, NavbarLink,Firstsection, Secondsection,Thirdsection,Fourthsection,Fourthsectionbanner,Fifthsection,Fifthsectioncontent,Sixthsection,Sixthsectiontest,Seventhsection,Eighthsection,WhatsApp,DMfirstsection,DMsecondsection,Facebookpage,Instagrampage,Youtubepage,Googlepage,Socialmediapostercontent,Socialmediaposterimages,Packagedesigncontent,Packagedesignimage,Logoworkcontent,Logoworkimage,Uiuxcontent,Uiuximage,Videomarketingcontent,Videomarketingvideo,Servicepageicon,Webdevelopmentservice,Webdesignservice,Ecommerceservice,Deliveryservice
from .models import *

### contact form admin
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ['name', 'emailid', 'phonenumber', 'ourservices', 'message']

admin.site.register(ContactForm, ContactFormAdmin)

### Email Addresss
class RecipientEmailAdmin(admin.ModelAdmin):
    list_display = ['email']

admin.site.register(RecipientEmail, RecipientEmailAdmin)

###Navbar Link
class NavbarLinkAdmin(admin.ModelAdmin):
    list_display =['title','slug','url']

admin.site.register(NavbarLink, NavbarLinkAdmin)

class FirstsectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'subtitle', 'button_text', 'button_link', 'image']

admin.site.register(Firstsection, FirstsectionAdmin)

## Second section:
class SecondsectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'subtitle', 'button_text', 'button_link', 'image']
    # Add more customization options if needed

admin.site.register(Secondsection, SecondsectionAdmin)


### third section
class ThirdsectionAdmin(admin.ModelAdmin):
    list_display = [  'text1','image1', 'text2','image2','text3', 'image3' ]
    # Add more customization options if needed

admin.site.register(Thirdsection, ThirdsectionAdmin)   


### fourth section:
class FourthsectionAdmin(admin.ModelAdmin):
    list_display = [ 'title', 'subtitle','png1', 'png2', 'lapimage','button_link','button_text', ]
    # Add more customization options if needed

admin.site.register(Fourthsection, FourthsectionAdmin) 


### fourth section banner
class FourthsectionbannerAdmin(admin.ModelAdmin):
    list_display = [ 'title', 'posterimage', ]
    # Add more customization options if needed

admin.site.register(Fourthsectionbanner, FourthsectionbannerAdmin) 

### fifth section:
class FifthsectionAdmin(admin.ModelAdmin):
    list_display = [ 'title', 'content', 'png1', 'png2']
    # Add more customization options if needed

admin.site.register(Fifthsection, FifthsectionAdmin)

### fifth section test:
class FifthsectioncontentAdmin(admin.ModelAdmin):
    list_display = [ 'heading', 'subcontent', 'image']
    # Add more customization options if needed

admin.site.register(Fifthsectioncontent, FifthsectioncontentAdmin)

### sixth section:
class SixthsectionAdmin(admin.ModelAdmin):
    list_display = ['heading','content','image' ]

admin.site.register(Sixthsection, SixthsectionAdmin)

class SixthsectiontestAdmin(admin.ModelAdmin):
    list_display = ['restaurant','review','image1', 'image2','image3']

admin.site.register(Sixthsectiontest, SixthsectiontestAdmin )

#### seventh section
class SeventhsectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'png','button_link','button_text']

admin.site.register(Seventhsection, SeventhsectionAdmin )


#### Eighth section
class EighthsectionAdmin(admin.ModelAdmin):
    list_display = ['title','logo']

admin.site.register(Eighthsection, EighthsectionAdmin )


class WhatsAppAdmin(admin.ModelAdmin):
    list_display = ['text', 'phonenumber']

admin.site.register(WhatsApp, WhatsAppAdmin)

class DMfirstsectionadmin(admin.ModelAdmin):
    list_display =['title','subtitle','image']

admin.site.register(DMfirstsection, DMfirstsectionadmin)

class DMsecondsectionadmin(admin.ModelAdmin):
    list_display =['title','subtitle','image']

admin.site.register(DMsecondsection, DMsecondsectionadmin)

class Facebookpageadmin(admin.ModelAdmin):
    list_display =['title','image']

admin.site.register(Facebookpage, Facebookpageadmin,)

class Instagrampageadmin(admin.ModelAdmin):
    list_display =['title','image']

admin.site.register(Instagrampage, Instagrampageadmin)

class Youtubepageadmin(admin.ModelAdmin):
    list_display =['title','image']

admin.site.register(Youtubepage, Youtubepageadmin)

class Googlepageadmin(admin.ModelAdmin):
    list_display =['title','image']

admin.site.register(Googlepage, Googlepageadmin)

class Socialmediapostercontentadmin(admin.ModelAdmin):
    list_display=['title','subtitle']

admin.site.register(Socialmediapostercontent, Socialmediapostercontentadmin)

class Socialmediaposterimagesadmin(admin.ModelAdmin):
    list_display=['title','image']

admin.site.register(Socialmediaposterimages, Socialmediaposterimagesadmin)

class Packagedesigncontentadmin(admin.ModelAdmin):
    list_display=['title','subtitle']

admin.site.register(Packagedesigncontent, Packagedesigncontentadmin)

class Packagedesignimagesadmin(admin.ModelAdmin):
    list_display=['title','image']

admin.site.register(Packagedesignimage, Packagedesignimagesadmin)


class Logoworkcontentadmin(admin.ModelAdmin):
    list_display=['title','subtitle']

admin.site.register(Logoworkcontent, Logoworkcontentadmin)

class Logoworkimageadmin(admin.ModelAdmin):
    list_display=['title','image']

admin.site.register(Logoworkimage, Logoworkimageadmin)

######## uiux content
class Uiuxcontentadmin(admin.ModelAdmin):
    list_display=['title','subtitle']

admin.site.register(Uiuxcontent, Uiuxcontentadmin)

class Uiuximageadmin(admin.ModelAdmin):
    list_display=['title','image']

admin.site.register(Uiuximage, Uiuximageadmin)


####### video markeing:
class Videomarketingcontentadmin(admin.ModelAdmin):
    list_display=['title','subtitle']

admin.site.register(Videomarketingcontent, Videomarketingcontentadmin)

class Videomarketingvideoadmin(admin.ModelAdmin):
    list_display=['title','video','date_uploaded', 'user']

admin.site.register(Videomarketingvideo, Videomarketingvideoadmin)


##### servicepage:
class ServicepageAdmin(admin.ModelAdmin):
    list_display = ['heading','content','image' ]

admin.site.register(Servicepage, ServicepageAdmin)

########## service page icon and text
class ServicepageiconAdmin(admin.ModelAdmin):
    list_display = ['webdevelopment_text','webdevelopment_image','webdesign_text','webdesign_image','ecommerce_text','ecommerce_image','delivery_text','delivery_image' ]

admin.site.register(Servicepageicon, ServicepageiconAdmin)

### webdevelopementservice
class WebdevelopmentserviceAdmin(admin.ModelAdmin):
    list_display = ['text','content','image' ]

admin.site.register(Webdevelopmentservice, WebdevelopmentserviceAdmin)

### webdesignservice
class WebdesignserviceAdmin(admin.ModelAdmin):
    list_display = ['text','content','image' ]

admin.site.register(Webdesignservice, WebdesignserviceAdmin)


### ecommerceservice
class EcommerceserviceAdmin(admin.ModelAdmin):
    list_display = ['text','content','image' ]

admin.site.register(Ecommerceservice, EcommerceserviceAdmin)


#### deliveryservice
class DeliveryserviceAdmin(admin.ModelAdmin):
    list_display = ['text','content','image' ]

admin.site.register(Deliveryservice, DeliveryserviceAdmin)


################################


class PaidpromotionadsAdmin(admin.ModelAdmin):
    list_display=['paid_facebookpage_text','paid_facebookpage_image','paid_intagrampage_text','paid_intagrampage_image','paid_youtubepage_text','paid_youtubepage_image','paid_googlepage_text','paid_googlepage_image'] 

admin.site.register(Paidpromotionads, PaidpromotionadsAdmin)

class Paid_facebookpageAdmin(admin.ModelAdmin):
    list_display=['title','image'] 

admin.site.register(Paid_facebookpage, Paid_facebookpageAdmin)


class Paid_instagrampageAdmin(admin.ModelAdmin):
    list_display=['title','image'] 

admin.site.register(Paid_instagrampage, Paid_instagrampageAdmin)


class Paid_youtubepageAdmin(admin.ModelAdmin):
    list_display=['title','image'] 

admin.site.register(Paid_youtubepage, Paid_youtubepageAdmin)


class Paid_googlepageAdmin(admin.ModelAdmin):
    list_display=['title','image'] 

admin.site.register(Paid_googlepage, Paid_googlepageAdmin)



#### seo all section data


class SeofirstsectionAdmin(admin.ModelAdmin):
    list_display = ['heading','subcontent','image' ]

admin.site.register(Seofirstsection, SeofirstsectionAdmin)

class SeosecondsectionAdmin(admin.ModelAdmin):
    list_display = ['content','image','msgtitle','msgcontent','msgtitletwo','msgcontenttwo']

admin.site.register(Seosecondsection, SeosecondsectionAdmin)

class SeothirdsectionAdmin(admin.ModelAdmin):
    list_display = ['title1','icon1','content1','title2','icon2','content2','title3','icon3','content3','image1','image2' ]

admin.site.register(Seothirdsection, SeothirdsectionAdmin)