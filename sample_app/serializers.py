from rest_framework import serializers
# from .models import ContactForm,RecipientEmail, NavbarLink,Firstsection,Secondsection,Thirdsection,Fourthsection,Fourthsectionbanner,Fifthsection,Fifthsectioncontent,Seventhsection,Eighthsection,Servicepageicon,Webdevelopmentservice,Webdesignservice,Ecommerceservice,Deliveryservice,Sixthsection, Sixthsectiontest,WhatsApp,DMsecondsection,Facebookpage,Instagrampage,Youtubepage,Googlepage,Socialmediapostercontent, Socialmediaposterimages, Packagedesigncontent,Packagedesignimage, Logoworkcontent,Logoworkimage, Uiuxcontent,Uiuximage,Videomarketingcontent,Videomarketingvideo
from .models import *

class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'


class RecipientEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipientEmail
        fields='__all__'

# navbar/serializers.py


class NavbarLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavbarLink
        fields = ['id', 'title', 'slug', 'url']
        



class FirstsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firstsection
        fields = '__all__'




### checking
# 
# from .models import Firstsection

# class FirstsectionSerializer(serializers.ModelSerializer):
#     image = serializers.ImageField()

#     class Meta:
#         model = Firstsection
#         fields = '__all__'


class SecondsectionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    class Meta:
        model = Secondsection
        fields = '__all__'


class ThirdsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thirdsection
        fields = '__all__'


class FourthsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fourthsection
        fields = '__all__'


class FourthsectionbannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fourthsectionbanner
        fields = '__all__'


class FifthsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fifthsection
        fields = '__all__'

class FifthsectioncontentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fifthsectioncontent
        fields = '__all__'
    


# class SixthsectionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Sixthsection
#         fields = '__all__'
# class SixthsectiontestSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Sixthsectiontest
#         fields = '__all__'




####### sixth section  and sixth section test:



class SixthsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sixthsection
        fields = '__all__'

class SixthsectiontestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sixthsectiontest
        fields = '__all__'






        
class SeventhsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seventhsection
        fields = '__all__'
        
class EighthsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eighthsection
        fields = '__all__'


### other backend serializers.py:


# 
# from .models import Fifthsection, Fifthsectioncontent

# class FifthsectionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Fifthsection
#         fields = '__all__'

# class FifthsectioncontentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Fifthsectioncontent
#         fields = '__all__'





class WhatsAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatsApp
        fields = '__all__'



########   digital markeing page    ######

from .models import DMfirstsection

class DMfirstsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DMfirstsection
        fields = '__all__'





class DMsecondsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DMsecondsection
        fields = '__all__'




class FacebookpageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Facebookpage
        fields = '__all__'





class InstagrampageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Instagrampage
        fields = '__all__'




class YoutubepageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Youtubepage
        fields = '__all__'




class GooglepageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Googlepage
        fields = '__all__'



#### social media poster images:




class SocialmediapostercontentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Socialmediapostercontent
        fields = '__all__'


class SocialmediaposterimagesSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Socialmediaposterimages
        fields = '__all__'

###package design'
class PackagedesigncontentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Packagedesigncontent
        fields = '__all__'


class PackagedesignimageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Packagedesignimage
        fields = '__all__'

#### logo work
class LogoworkcontentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Logoworkcontent
        fields = '__all__'


class LogoworkimageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Logoworkimage
        fields = '__all__'
    
##### Uiux 
class UiuxcontentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Uiuxcontent
        fields = '__all__'


class UiuximageSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Uiuximage
        fields = '__all__'


### videomaking:
class VideomarketingcontentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Videomarketingcontent
        fields = '__all__'


class VideomarketingvideoSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Videomarketingvideo
        fields = '__all__'


##### service page , webdevelopment, webdesign, ecommerce, delivery

class ServicepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicepage
        fields = '__all__' 

class ServicepageiconSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicepageicon
        fields = '__all__' 

class WebdevelopmentserviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Webdevelopmentservice
        fields = '__all__' 

class WebdesignserviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Webdesignservice
        fields = '__all__' 

class EcommerceserviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ecommerceservice
        fields = '__all__' 

class DeliveryserviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deliveryservice
        fields = '__all__' 


################################

class PaidpromotionadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paidpromotionads
        fields = '__all__' 

class Paid_facebookpageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paid_facebookpage
        fields = '__all__' 

class Paid_instagrampageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paid_instagrampage
        fields = '__all__' 

class Paid_youtubepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paid_youtubepage
        fields = '__all__' 

class Paid_googlepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paid_googlepage
        fields = '__all__' 


#### seo all section:


class SeofirstsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seofirstsection
        fields = '__all__'

class SeosecondsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seosecondsection
        fields = '__all__'

class SeothirdsectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seothirdsection
        fields = '__all__'