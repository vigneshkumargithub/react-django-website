from django.db import models
from django.core.validators import RegexValidator
from ckeditor.fields import RichTextField
import os
import uuid
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator
from django.utils import timezone

class RecipientEmail(models.Model):
    email = models.EmailField(unique=True)

class ContactForm(models.Model):
    name = models.CharField(max_length=100)
    emailid = models.EmailField(unique=True ,default="")
    ourservices = models.CharField(max_length=100,default="", choices=[
        ('Web development', 'Web development'),
        ('Digital marketing', 'Digital marketing'),
        ('Paid service', 'Paid service'),
        ('SEO', 'SEO'),])
    phonenumber = models.CharField(max_length=15,
        validators=[
            RegexValidator(
                regex=r'^[0-9]+$',
                message='Phone number must only contain numeric values.',
                code='invalid_phonenumber',
            )
        ],default=""
    )
    message = models.TextField(default="")

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "UserData"
 

# navbar/models.py
class NavbarLink(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    url = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    
def get_image_filename(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return filename

## firstsection
class Firstsection(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=200)
    button_text = models.CharField(max_length=50)
    button_link = models.CharField(max_length=200)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Home_Section_Data"

### second section
class Secondsection(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=200)
    subtitleone = RichTextField(max_length=2000)
    button_text = models.CharField(max_length=50)
    button_link = models.CharField(max_length=200)
    image = models.ImageField(upload_to=get_image_filename)

    def __self__(self):
        return self.title
        # (verbose_name = "name")
    class Meta:
        verbose_name_plural = "About_Section_Data"
    

### third section
class Thirdsection(models.Model):
    image1 = models.ImageField(upload_to=get_image_filename, default='')
    text1 = RichTextField(max_length=200, default='')
    image2 = models.ImageField(upload_to=get_image_filename, default='')
    text2 = RichTextField(max_length=200, default='')
    image3 = models.ImageField(upload_to=get_image_filename, default='')
    text3 = RichTextField(max_length=200, default='')

    def __self__(self):
        return self.image1
    class Meta:
        verbose_name_plural = "Services_Data"

### fourth section 
class Fourthsection(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=200)
    png1 = models.ImageField(upload_to=get_image_filename)
    png2 = models.ImageField(upload_to=get_image_filename)
    button_text = models.CharField(max_length=50)
    button_link = models.CharField(max_length=200)
    lapimage = models.ImageField(upload_to=get_image_filename)

    def __self__(self):
        return self.title
        # (verbose_name = "name")
    class Meta:
        verbose_name_plural = "Protfolio_Data"
    
### 4th section banner :
class Fourthsectionbanner(models.Model):
    title = RichTextField(max_length=200, default="", null=True, blank=True)
    posterimage = models.ImageField(upload_to=get_image_filename)

    def __self__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Portfolio_Banner"

####  fifth section:
class Fifthsection(models.Model):
    title = RichTextField(max_length=255,default='')
    content = RichTextField(max_length=200, default='')
    png1  = models.ImageField(upload_to=get_image_filename, default='')
    png2  = models.ImageField(upload_to=get_image_filename, default='') 
    
    def __self__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Ourservice_Data"  

####fifth section content
class Fifthsectioncontent(models.Model):
    heading = RichTextField(max_length=255, default='')
    subcontent = RichTextField(max_length=200, default='')
    image = models.ImageField(upload_to=get_image_filename, default='')

    def __self__(self):
        return self.heading
    class Meta:
        verbose_name_plural = "Ourservice_Box_Data"


##### Sixthsection
class Sixthsection(models.Model):
    heading = RichTextField(max_length=200, default='')
    content = RichTextField(max_length=200, default='')
    image = models.ImageField(upload_to=get_image_filename)
    # Add other fields as needed for your frontend

    def __self__(self):
        return self.heading
    class Meta:
        verbose_name_plural = "Testimonial_Data"

### Sixthsectiontest
class Sixthsectiontest(models.Model):
    restaurant = RichTextField(max_length=100, default='')
    review = RichTextField(max_length=200, default='')
    image1 = models.ImageField(upload_to=get_image_filename, default='')
    image2 = models.ImageField(upload_to=get_image_filename, default='')
    image3 = models.ImageField(upload_to=get_image_filename, default='')
    # Add other fields as needed for your frontend

    def __self__(self):
        return self.restaurant
    class Meta:
        verbose_name_plural = "Testimonial_Review"

### seventhsection
class Seventhsection(models.Model):
    title = RichTextField(max_length=200)
    png = models.ImageField(upload_to=get_image_filename)
    button_text = models.CharField(max_length=50)
    button_link = models.CharField(max_length=200)

    def __self__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Quote_Data"

### eighth section
class Eighthsection(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    logo = models.ImageField(upload_to=get_image_filename)

    def __self__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Client_logos"
    

### whatsapp 
class WhatsApp(models.Model):
    text = models.TextField(max_length=100)
    phonenumber = models.CharField(max_length=15)

    def __self__(self):
        return self.text
    class Meta:
        verbose_name_plural = "Whatsapp_Data"


####  Digital Marketing firstsection    
class DMfirstsection(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=200)
    image = models.ImageField(upload_to=get_image_filename)
 
    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "DMfirstsection"
    
### Digitl marketing Secondsection
class DMsecondsection(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=2000)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "DMsecondsection"


### facebook page 
class Facebookpage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "DM_Facebook_Page"
    
### instagram page
class Instagrampage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "DM_Instagram_Page"
    
### Youtube page
class Youtubepage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "DM_Youtube_Page"
    
### Google page
class Googlepage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "DM_Google_Page"
    
##### socialmedia  marketing page
class Socialmediapostercontent(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=2000)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "SocialMediaPoster_Data"

### socialmedia poster
class Socialmediaposterimages(models.Model):
    title = models.TextField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "SocialMediaPoster_Image" 

### packagedesign content
class Packagedesigncontent(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=2000)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "PackageDesign_Data"

### Packagedesign image
class Packagedesignimage(models.Model):
    title = models.TextField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "PackageDesign_Images"


###logowork content
class Logoworkcontent(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=2000)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "LogoWork_Data"

###Logowork image
class Logoworkimage(models.Model):
    title = models.TextField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "LogoWork_Images"


###ui/ux content
class Uiuxcontent(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=2000)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Uiux_Data"

### uiux image
class Uiuximage(models.Model):
    title = models.TextField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title 
    class Meta:
        verbose_name_plural = "Uiux_image"

####videomarkeing content:
class Videomarketingcontent(models.Model):
    title = RichTextField(max_length=200, default="")
    subtitle = RichTextField(max_length=2000)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "VideoMarketing_Data"

####videomarkeing video:
class Videomarketingvideo(models.Model):
    title = models.TextField(max_length=200, null=True, blank=True)
    video = models.FileField(
        upload_to='videos_uploaded',
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]
    )
    date_uploaded = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "VideoMarketing_video"

#### service page :
class Servicepage(models.Model):
    heading = RichTextField(max_length=200, default='')
    content = RichTextField(max_length=2000, default='')
    image = models.ImageField(upload_to=get_image_filename)
    # Add other fields as needed for your frontend

    def __self__(self):
        return self.heading
    class Meta:
        verbose_name_plural = "Servicepage"

### Servicepage icon
class Servicepageicon(models.Model):
    webdevelopment_text = RichTextField(max_length=200, default='')
    webdevelopment_image = models.ImageField(upload_to=get_image_filename, default='')
    webdesign_text = RichTextField(max_length=200, default='')
    webdesign_image = models.ImageField(upload_to=get_image_filename, default='')
    ecommerce_text = RichTextField(max_length=200, default='')
    ecommerce_image = models.ImageField(upload_to=get_image_filename, default='')
    delivery_text = RichTextField(max_length=200, default='')
    delivery_image = models.ImageField(upload_to=get_image_filename, default='')
 
    def __self__(self):
        return self.webdevelopment_text
    class Meta:
        verbose_name_plural = "Servicepageicon & text"


### webdevelopment:
class Webdevelopmentservice(models.Model):
    text = RichTextField(max_length=200, default='')
    content = RichTextField(max_length=2000, default='')
    image = models.ImageField(upload_to=get_image_filename)
    # Add other fields as needed for your frontend

    def __self__(self):
        return self.text
    class Meta:
        verbose_name_plural = "Webdevelopmentservice"



### webdesign 
class Webdesignservice(models.Model):
    text = RichTextField(max_length=200, default='')
    content = RichTextField(max_length=2000, default='')
    image = models.ImageField(upload_to=get_image_filename)
    # Add other fields as needed for your frontend

    def __self__(self):
        return self.text
    class Meta:
        verbose_name_plural = "Webdesignservice"


### ecommerce 
class Ecommerceservice(models.Model):
    text = RichTextField(max_length=200, default='')
    content = RichTextField(max_length=2000, default='')
    image = models.ImageField(upload_to=get_image_filename)

    def __self__(self):
        return self.text
    class Meta:
        verbose_name_plural = "Ecommerceservice"

### delivery 
class Deliveryservice(models.Model):
    text = RichTextField(max_length=200, default='')
    content = RichTextField(max_length=2000, default='')
    image = models.ImageField(upload_to=get_image_filename)
    # Add other fields as needed for your frontend

    def __self__(self):
        return self.text
    class Meta:
        verbose_name_plural = "Deliveryservice"


################################
class Paidpromotionads(models.Model):
    paid_facebookpage_text = RichTextField(max_length=200, default='')
    paid_facebookpage_image = models.ImageField(upload_to=get_image_filename, default='')
    paid_intagrampage_text = RichTextField(max_length=200, default='')
    paid_intagrampage_image = models.ImageField(upload_to=get_image_filename, default='')
    paid_youtubepage_text = RichTextField(max_length=200, default='')
    paid_youtubepage_image = models.ImageField(upload_to=get_image_filename, default='')
    paid_googlepage_text = RichTextField(max_length=200, default='')
    paid_googlepage_image = models.ImageField(upload_to=get_image_filename, default='')
 
    def __self__(self):
        return self.paid_facebookpage_text
    class Meta:
        verbose_name_plural = "PaidPromotionAdsLink & Image"


class Paid_facebookpage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Paid_Facebookpage"

class Paid_instagrampage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Paid_Instagram"

class Paid_youtubepage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Paid_Youtube"

class Paid_googlepage(models.Model):
    title = RichTextField(max_length=200, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Paid_Google"

##### seo frirst section::

class Seofirstsection(models.Model):
    heading = RichTextField(max_length=255, default='')
    subcontent = RichTextField(max_length=500, default='')
    image = models.ImageField(upload_to=get_image_filename, default='')

    def __self__(self):
        return self.heading
    class Meta:
        verbose_name_plural = "SEO_First_Section"


class Seosecondsection(models.Model):
    content = RichTextField(max_length=3000, default='', null=True, blank=True)
    image = models.ImageField(upload_to=get_image_filename, default='', null=True, blank=True)
    msgtitle= RichTextField(max_length=200, default='')
    msgcontent=RichTextField(max_length=500, default='')
    msgtitletwo= RichTextField(max_length=200, default='')
    msgcontenttwo=RichTextField(max_length=500, default='')
    def __self__(self):
        return self.content
    class Meta:
        verbose_name_plural = "SEO_Second_Section"

    
class Seothirdsection(models.Model):
    title1= RichTextField(max_length=200, default='')
    content1=RichTextField(max_length=500, default='')
    icon1=models.ImageField(upload_to=get_image_filename, default='')
    title2= RichTextField(max_length=200, default='',null=True, blank=True)
    content2=RichTextField(max_length=500, default='',null=True, blank=True)
    icon2=models.ImageField(upload_to=get_image_filename, default='',null=True, blank=True)
    title3= RichTextField(max_length=200, default='',null=True, blank=True)
    content3=RichTextField(max_length=500, default='',null=True, blank=True)
    icon3=models.ImageField(upload_to=get_image_filename, default='',null=True, blank=True)
    image1=models.ImageField(upload_to=get_image_filename, default='')
    image2=models.ImageField(upload_to=get_image_filename, default='')

    def __self__(self):
        return self.title1
    class Meta:
        verbose_name_plural = "SEO_Third_Section"