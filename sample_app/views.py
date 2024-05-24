# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import ContactForm
# from .serializers import ContactFormSerializer
# from django.core.mail import send_mail

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         # Check if an existing record with the same email or phone number exists
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')

#         if ContactForm.objects.filter(emailid=existing_email).exists() or \
#            ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'Record with the same email or phone number already exists.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()


#             send_mail(
#                    'New Contact Form Submission',
#                     '',
#                    'your@gmail.com',  # Replace with your Gmail address
#                   ['vigneshbsc048@gmail.com'],  # Replace with the recipient's email address
#                   fail_silently=False,
#                   html_message=f'<b>Name:</b> {serializer.data["Name"]}<br>'
#                           f'<b>EmailID:</b> {serializer.data["emailid"]}<br>'
#                           f'<b>Our Service:</b> {serializer.data["ourservices"]}<br>'
#                           f'<b>Phone:</b> {serializer.data["phonenumber"]}<br>'
#                           f'<b>Message:</b> {serializer.data["message"]}'
# )

#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#####   #######  ##########  ############# ################ ###################  ######################
############   old and original contact form views.py is goodly working condition:

# # views.py
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import ContactForm, RecipientEmail
# from .serializers import ContactFormSerializer
# from django.core.mail import send_mail

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')

#         if ContactForm.objects.filter(emailid=existing_email).exists() or \
#            ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'Record with the same email or phone number already exists.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             contact_form_instance = serializer.save()

#             # Fetch the recipient email address dynamically
#             recipient_email_object = RecipientEmail.objects.first()
#             if recipient_email_object:
#                 recipient_email_address = recipient_email_object.email

#                 # Send email to the recipient specified in the model
#                 send_mail(
#                     'New Contact Form Submission',
#                     '',
#                     'your@gmail.com',  # Replace with your Gmail address
#                     [recipient_email_address],  # Use the recipient_email from the model
#                     fail_silently=False,
#                     html_message=f'<b>Name:</b> {serializer.data["name"]}<br>'
#                                   f'<b>EmailID:</b> {serializer.data["emailid"]}<br>'
#                                   f'<b>Our Service:</b> {serializer.data["ourservices"]}<br>'
#                                   f'<b>Phone:</b> {serializer.data["phonenumber"]}<br>'
#                                   f'<b>Message:</b> {serializer.data["message"]}'
#                 )

#                 return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
##############################################################################################################


##### ithu work aguthu, but ithuku keela ullathu chack panarathuku itha cmt paniruku:::::

# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import ContactForm, RecipientEmail
# from .serializers import ContactFormSerializer
# from django.core.mail import send_mail

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')

#         if ContactForm.objects.filter(emailid=existing_email).exists():
#             return Response({'detail': 'The email ID is already stored.'}, status=status.HTTP_400_BAD_REQUEST)

#         if ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'The phone number is already stored.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             contact_form_instance = serializer.save()

#             # Fetch the recipient email address dynamically
#             recipient_email_object = RecipientEmail.objects.first()
#             if recipient_email_object:
#                 recipient_email_address = recipient_email_object.email

#                 # Send email to the recipient specified in the model
#                 send_mail(
#                     'New Contact Form Submission',
#                     '',
#                     'your@gmail.com',  # Replace with your Gmail address
#                     [recipient_email_address],  # Use the recipient_email from the model
#                     fail_silently=False,
#                     html_message=f'<b>Name:</b> {serializer.data["name"]}<br>'
#                                   f'<b>EmailID:</b> {serializer.data["emailid"]}<br>'
#                                   f'<b>Our Service:</b> {serializer.data["ourservices"]}<br>'
#                                   f'<b>Phone:</b> {serializer.data["phonenumber"]}<br>'
#                                   f'<b>Message:</b> {serializer.data["message"]}'
#                 )

#                 return Response({'detail': 'Thank you, our team will contact you.'}, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
##########################   ::::::::::::::::::::::::::





# views.py

# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import ContactForm
# from .serializers import ContactFormSerializer

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         # Check for existing email ID and phone number
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')
#         if ContactForm.objects.filter(emailid=existing_email).exists():
#             return Response({'detail': 'The email ID is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
#         if ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'The phone number is already stored.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'detail': 'Thank you, our team will contact you.'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# views.py   very good function of backend  // properly working good //

# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import ContactForm
# from .serializers import ContactFormSerializer

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         # Check for existing email ID and phone number
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')
#         if ContactForm.objects.filter(emailid=existing_email).exists():
#             return Response({'detail': 'The email IDsssss is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
#         if ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'The phone numberssss is already stored.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'detail': 'Thank you, our team will contact you.'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# views.py
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
# from .models import ContactForm
# from .serializers import ContactFormSerializer
from .models import *
from .serializers  import *
import re


### correct ah work agum but mail la data pogathu

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         # Check for existing email ID and phone number
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')
#         if ContactForm.objects.filter(emailid=existing_email).exists():
#             return Response({'detail': 'The email ID is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
#         if ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'The phone number is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
 
#         # Validate phone number for non-numeric characters
#         phone_number = request.data.get('phonenumber')
#         if not re.match("^[0-9()#&+*-=.]+$", phone_number):
#             # return Response({'detail': 'Phone number must only contain numeric values and the characters (#, -, *, etc).'}, status=status.HTTP_400_BAD_REQUEST)
#             return Response({'detail': 'Phone number must only contain numeric values.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'detail': 'Thank you, our team will contact you.'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### email la data pogurathukaha views function podren;


##### original  ######
###---------------------###
# from django.utils.decorators import method_decorator
# from django.views.decorators.csrf import csrf_exempt


from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ContactForm, RecipientEmail
from .serializers import ContactFormSerializer
import re
from django.core.mail import send_mail
from django.conf import settings

# @method_decorator(csrf_exempt, name='dispatch')
class SubmitFormView(APIView):
    def post(self, request, *args, **kwargs):
        # Check for existing email ID and phone number
        existing_email = request.data.get('emailid')
        existing_phone = request.data.get('phonenumber')
        if ContactForm.objects.filter(emailid=existing_email).exists():
            return Response({'detail': 'The email ID is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
        if ContactForm.objects.filter(phonenumber=existing_phone).exists():
            return Response({'detail': 'The phone number is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
 
        # Validate phone number for non-numeric characters
        phone_number = request.data.get('phonenumber')
        if not re.match("^[0-9()#&+*-=.]+$", phone_number):
            return Response({'detail': 'Phone number must only contain numeric values.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            # Save contact form data
            serializer.save()

            # Fetch the recipient email address dynamically
            recipient_email_object = RecipientEmail.objects.first()
            if recipient_email_object:
                recipient_email_address = recipient_email_object.email

                # Send email to the recipient specified in the model
                send_mail(
                    'New Contact Form Submissions',
                    '',
                    settings.EMAIL_HOST_USER,  # Replace with your Gmail address
                    [recipient_email_address],  # Use the recipient_email from the model
                    fail_silently=False,
                    html_message=f'<b>Name:</b> {serializer.data["name"]}<br>'
                                  f'<b>EmailID:</b> {serializer.data["emailid"]}<br>'
                                  f'<b>Our Service:</b> {serializer.data["ourservices"]}<br>'
                                  f'<b>Phone:</b> {serializer.data["phonenumber"]}<br>'
                                  f'<b>Message:</b> {serializer.data["message"]}'
                )

            return Response({'detail': 'Thank you, our team will contact you.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

######   original  #######
####--------------------------####


# from django.shortcuts import render
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import ContactForm, RecipientEmail
# from .serializers import ContactFormSerializer
# import re
# from django.core.mail import send_mail
# from django.conf import settings

# class SubmitFormView(APIView):
#     def post(self, request, *args, **kwargs):
#         # Check for existing email ID and phone number
#         existing_email = request.data.get('emailid')
#         existing_phone = request.data.get('phonenumber')
#         if ContactForm.objects.filter(emailid=existing_email).exists():
#             return Response({'detail': 'The email ID is already stored.'}, status=status.HTTP_400_BAD_REQUEST)
#         if ContactForm.objects.filter(phonenumber=existing_phone).exists():
#             return Response({'detail': 'The phone number is already stored.'}, status=status.HTTP_400_BAD_REQUEST)

#         # Validate phone number for non-numeric characters
#         phone_number = request.data.get('phonenumber')
#         if not re.match("^[0-9()#&+*-=.]+$", phone_number):
#             return Response({'detail': 'Phone number must only contain numeric values.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             # Save contact form data
#             serializer.save()

#             # Fetch the recipient email address dynamically
#             recipient_email_object = RecipientEmail.objects.first()
#             if recipient_email_object:
#                 recipient_email_address = recipient_email_object.email

#                 # Send email to the recipient specified in the model
#                 send_mail(
#                     'New Contact Form Submissions',
#                     '',
#                     settings.EMAIL_HOST_USER,  # Replace with your Gmail address
#                     [recipient_email_address],  # Use the recipient_email from the model
#                     fail_silently=False,
#                     html_message=f'<b>Name:</b> {serializer.data["name"]}<br>'
#                                  f'<b>EmailID:</b> {serializer.data["emailid"]}<br>'
#                                  f'<b>Our Service:</b> {serializer.data["ourservices"]}<br>'
#                                  f'<b>Phone:</b> {serializer.data["phonenumber"]}<br>'
#                                  f'<b>Message:</b> {serializer.data["message"]}'
#                 )

#             return Response({'detail': 'Thank you, our team will contact you.'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


 




#### React frontend Build index.html file function:

# from django.shortcuts import render

def myview(request):
    # context = {'key': 'value'}  # Optional: Add context data if needed
    return render(request, 'index.html')  # Pass the request and template name






# navbar/views.py
class NavbarLinkList(generics.ListCreateAPIView):
    queryset = NavbarLink.objects.all()
    serializer_class = NavbarLinkSerializer

class NavbarLinkDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NavbarLink.objects.all()
    serializer_class = NavbarLinkSerializer

#### this also another get and post method for image 
######### ######### ########## ########### ######### #########
### first section:
@api_view(['GET', 'POST'])
def firstsection(request):
    if request.method == 'GET':
        queryset = Firstsection.objects.all() 
        serializer = FirstsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FirstsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

### second section:
@api_view(['GET', 'POST'])
def secondsection(request):
    if request.method == 'GET':
        queryset = Secondsection.objects.all()
        serializer = SecondsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SecondsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

### third section
@api_view(['GET', 'POST'])
def thirdsection(request):
    if request.method == 'GET':
        queryset = Thirdsection.objects.all()
        serializer = ThirdsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ThirdsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### fourth section:
@api_view(['GET', 'POST'])
def fourthsection(request):
    if request.method == 'GET':
        queryset = Fourthsection.objects.all()
        serializer = FourthsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FourthsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# fourth section banner:
@api_view(['GET', 'POST'])
def fourthsectionbanner(request):
    if request.method == 'GET':
        queryset = Fourthsectionbanner.objects.all()
        serializer = FourthsectionbannerSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FourthsectionbannerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### fifth section:
@api_view(['GET', 'POST'])
def fifthsection(request):
    if request.method == 'GET':
        queryset = Fifthsection.objects.all()
        serializer = FifthsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FifthsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### fifthsection content
@api_view(['GET', 'POST'])
def fifthsectioncontent(request):
    if request.method == 'GET':
        queryset = Fifthsectioncontent.objects.all() 
        serializer = FifthsectioncontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FifthsectioncontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### sixth section: 
@api_view(['GET', 'POST'])
def sixthsection(request):
    if request.method == 'GET':
        queryset = Sixthsection.objects.all()
        serializer = SixthsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SixthsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### sixth section test
@api_view(['GET', 'POST'])
def sixthsectiontest(request):
    if request.method == 'GET':
        queryset = Sixthsectiontest.objects.all()
        serializer = SixthsectiontestSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SixthsectiontestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### seventh section: 
@api_view(['GET', 'POST'])
def seventhsection(request):
    if request.method == 'GET':
        queryset = Seventhsection.objects.all()
        serializer = SeventhsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SeventhsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

### eighth section:
@api_view(['GET', 'POST'])
def eighthsection(request):
    if request.method == 'GET':
        queryset = Eighthsection.objects.all()
        serializer = EighthsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = EighthsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#### whatsapp
@api_view(['GET'])
def whatsapp(request):
    whatsapp = WhatsApp.objects.first()
    phonenumber = whatsapp.phonenumber if whatsapp else ""
    return Response({'phone_number': phonenumber})

#### digital marketing page:
@api_view(['GET', 'POST'])
def dmfirstsection(request):
    if request.method == 'GET':
        queryset = DMfirstsection.objects.all()
        serializer = DMfirstsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DMfirstsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

###DMsecond section:
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DMsecondsectionSerializer
from .models import DMsecondsection

@api_view(['GET', 'POST'])
def dmsecondsection(request):
    if request.method == 'GET':
        queryset = DMsecondsection.objects.all()
        serializer = DMsecondsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DMsecondsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#### facebook page:
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FacebookpageSerializer
from .models import Facebookpage

@api_view(['GET', 'POST'])
def facebookpage(request):
    if request.method == 'GET':
        queryset = Facebookpage.objects.all()
        serializer = FacebookpageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FacebookpageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#### intagram page
@api_view(['GET', 'POST'])
def instagrampage(request):
    if request.method == 'GET':
        queryset = Instagrampage.objects.all()
        serializer = InstagrampageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = InstagrampageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

### Youtube page
@api_view(['GET', 'POST'])
def youtubepage(request):
    if request.method == 'GET':
        queryset = Youtubepage.objects.all()
        serializer = YoutubepageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = YoutubepageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

###google page
@api_view(['GET', 'POST'])
def googlepage(request):
    if request.method == 'GET':
        queryset = Googlepage.objects.all()
        serializer = GooglepageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GooglepageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#### socialmedia poster:
@api_view(['GET', 'POST'])
def socialmediapostercontent(request):
    if request.method == 'GET':
        queryset = Socialmediapostercontent.objects.all()
        serializer = SocialmediapostercontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SocialmediapostercontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#### socialmedial poster content:
@api_view(['GET', 'POST'])
def socialmediapostercontent(request):
    if request.method == 'GET':
        queryset = Socialmediapostercontent.objects.all()
        serializer = SocialmediapostercontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SocialmediapostercontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### socialmedia poster images:
@api_view(['GET', 'POST'])
def socialmediaposterimages(request):
    if request.method == 'GET':
        queryset = Socialmediaposterimages.objects.all()
        serializer = SocialmediaposterimagesSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SocialmediaposterimagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

###### packagedesign content
@api_view(['GET', 'POST'])
def packagedesigncontent(request):
    if request.method == 'GET':
        queryset = Packagedesigncontent.objects.all()
        serializer = PackagedesigncontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PackagedesigncontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### package design images:
@api_view(['GET', 'POST'])
def packagedesignimage(request):
    if request.method == 'GET':
        queryset = Packagedesignimage.objects.all()
        serializer = PackagedesignimageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PackagedesignimageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




### logo work content:
@api_view(['GET', 'POST'])
def logoworkcontent(request):
    if request.method == 'GET':
        queryset = Logoworkcontent.objects.all()
        serializer = LogoworkcontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = LogoworkcontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### logo work images
@api_view(['GET', 'POST'])
def logoworkimage(request):
    if request.method == 'GET':
        queryset = Logoworkimage.objects.all()
        serializer = LogoworkimageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = LogoworkimageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




##### ui&ux content
@api_view(['GET', 'POST'])
def uiuxcontent(request):
    if request.method == 'GET':
        queryset = Uiuxcontent.objects.all()
        serializer = UiuxcontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UiuxcontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### ui&ux images:
@api_view(['GET', 'POST'])
def uiuximage(request):
    if request.method == 'GET':
        queryset = Uiuximage.objects.all()
        serializer = UiuximageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UiuximageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





##### video marketing:
@api_view(['GET', 'POST'])
def videomarketingcontent(request):
    if request.method == 'GET':
        queryset = Videomarketingcontent.objects.all()
        serializer = VideomarketingcontentSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VideomarketingcontentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### ui&ux images:
@api_view(['GET', 'POST'])
def videomarketingvideo(request):
    if request.method == 'GET':
        queryset = Videomarketingvideo.objects.all()
        serializer = VideomarketingvideoSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VideomarketingvideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#### service page:

@api_view(['GET', 'POST'])
def servicepage(request):
    if request.method == 'GET':
        queryset = Servicepage.objects.all()
        serializer = ServicepageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ServicepageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


#### service page: get and post method
@api_view(['GET', 'POST'])
def servicepageicon(request):
    if request.method == 'GET':
        queryset = Servicepageicon.objects.all()
        serializer = ServicepageiconSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ServicepageiconSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

### webdevelopment service
@api_view(['GET', 'POST'])
def webdevelopmentservice(request):
    if request.method == 'GET':
        queryset = Webdevelopmentservice.objects.all()
        serializer = WebdevelopmentserviceSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WebdevelopmentserviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### webdesign service
@api_view(['GET', 'POST'])
def webdesignservice(request):
    if request.method == 'GET':
        queryset = Webdesignservice.objects.all()
        serializer = WebdesignserviceSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WebdesignserviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


### ecommerce service
@api_view(['GET', 'POST'])
def ecommerceservice(request):
    if request.method == 'GET':
        queryset = Ecommerceservice.objects.all()
        serializer = EcommerceserviceSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = EcommerceserviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



### delivery service:
@api_view(['GET', 'POST'])
def deliveryservice(request):
    if request.method == 'GET':
        queryset = Deliveryservice.objects.all()
        serializer = DeliveryserviceSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DeliveryserviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


################################

## Paidpromotionads 

@api_view(['GET', 'POST'])
def paidpromotionads(request):
    if request.method == 'GET':
        queryset = Paidpromotionads.objects.all()
        serializer = PaidpromotionadsSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PaidpromotionadsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def paid_facebookpage(request):
    if request.method == 'GET':
        queryset = Paid_facebookpage.objects.all()
        serializer = Paid_facebookpageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Paid_facebookpageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def paid_instagrampage(request):
    if request.method == 'GET':
        queryset = Paid_instagrampage.objects.all()
        serializer = Paid_instagrampageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Paid_instagrampageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'POST'])
def paid_youtubepage(request):
    if request.method == 'GET':
        queryset = Paid_youtubepage.objects.all()
        serializer = Paid_youtubepageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Paid_youtubepageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def paid_googlepage(request):
    if request.method == 'GET':
        queryset = Paid_googlepage.objects.all()
        serializer = Paid_googlepageSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Paid_googlepageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


###### Seo all section:

@api_view(['GET', 'POST'])
def seofirstsection(request):
    if request.method == 'GET':
        queryset = Seofirstsection.objects.all()
        serializer = SeofirstsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SeofirstsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def seosecondsection(request):
    if request.method == 'GET':
        queryset = Seosecondsection.objects.all()
        serializer = SeosecondsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SeosecondsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def seothirdsection(request):
    if request.method == 'GET':
        queryset = Seothirdsection.objects.all()
        serializer = SeothirdsectionSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SeothirdsectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


































































############# below all function is class method  ############




##### second section ----->views.py
# class SecondsectionList(generics.ListCreateAPIView):
#     queryset = Secondsection.objects.all()
#     serializer_class = SecondsectionSerializer

# class SecondsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Secondsection.objects.all()
#     serializer_class = SecondsectionSerializer 


#### third section:
# class ThirdsectionList(generics.ListCreateAPIView):
#     queryset = Thirdsection.objects.all()
#     serializer_class = ThirdsectionSerializer

# class ThirdsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Thirdsection.objects.all()
#     serializer_class = ThirdsectionSerializer


######## fourth section --------->views.py
# class FourthsectionList(generics.ListCreateAPIView):
#     queryset = Fourthsection.objects.all()
#     serializer_class = FourthsectionSerializer

# class FourthsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Fourthsection.objects.all()
#     serializer_class = FourthsectionSerializer


######## fifth section --------->views.py
# class FifthsectionList(generics.ListCreateAPIView):
#     queryset = Fifthsection.objects.all()
#     serializer_class = FifthsectionSerializer

# class FifthsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Fifthsection.objects.all()
#     serializer_class = FifthsectionSerializer

# class FifthsectioncontentList(generics.ListCreateAPIView):
#     queryset = Fifthsectioncontent.objects.all()
#     serializer_class = FifthsectioncontentSerializer

# class FifthsectioncontentDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Fifthsectioncontent.objects.all()
#     serializer_class = FifthsectioncontentSerializer


# ##### sixth section:
# class SixthsectionList(generics.ListCreateAPIView):
#     queryset = Sixthsection.objects.all()
#     serializer_class = Sixthsectionserializer

# class SixthsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Sixthsection.objects.all()
#     serializer_class = Sixthsectionserializer

# class SixthsectiontestList(generics.ListCreateAPIView):
#     queryset = Sixthsectiontest.objects.all()
#     serializer_class = Sixthsectiontestserializer

# class SixthsectiontestDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Sixthsectiontest.objects.all()
#     serializer_class = Sixthsectiontestserializer


######## seventh section --------->views.py
# class SeventhsectionList(generics.ListCreateAPIView):
#     queryset = Seventhsection.objects.all()
#     serializer_class = SeventhsectionSerializer

# class SeventhsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Seventhsection.objects.all()
#     serializer_class = SeventhsectionSerializer


# ######## Eighth section --------->views.py
# class EighthsectionList(generics.ListCreateAPIView):
#     queryset = Eighthsection.objects.all()
#     serializer_class = EighthsectionSerializer

# class EighthsectionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Eighthsection.objects.all()
#     serializer_class = EighthsectionSerializer



