# Generated by Django 5.0.1 on 2024-05-02 10:25

import ckeditor.fields
import sample_app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sample_app', '0057_alter_servicepageicon_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Paid_facebookpage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', ckeditor.fields.RichTextField(blank=True, default='', max_length=200, null=True)),
                ('image', models.ImageField(upload_to=sample_app.models.get_image_filename)),
            ],
            options={
                'verbose_name_plural': 'Paid_Facebookpage',
            },
        ),
        migrations.CreateModel(
            name='Paid_googlepage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', ckeditor.fields.RichTextField(blank=True, default='', max_length=200, null=True)),
                ('image', models.ImageField(upload_to=sample_app.models.get_image_filename)),
            ],
            options={
                'verbose_name_plural': 'Paid_Google',
            },
        ),
        migrations.CreateModel(
            name='Paid_instagrampage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', ckeditor.fields.RichTextField(blank=True, default='', max_length=200, null=True)),
                ('image', models.ImageField(upload_to=sample_app.models.get_image_filename)),
            ],
            options={
                'verbose_name_plural': 'Paid_Instagram',
            },
        ),
        migrations.CreateModel(
            name='Paid_youtubepage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', ckeditor.fields.RichTextField(blank=True, default='', max_length=200, null=True)),
                ('image', models.ImageField(upload_to=sample_app.models.get_image_filename)),
            ],
            options={
                'verbose_name_plural': 'Paid_Youtube',
            },
        ),
        migrations.CreateModel(
            name='Paidpromotionads',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('paid_facebookpage_text', ckeditor.fields.RichTextField(default='', max_length=200)),
                ('paid_facebookpage_image', models.ImageField(default='', upload_to=sample_app.models.get_image_filename)),
                ('paid_intagrampage_text', ckeditor.fields.RichTextField(default='', max_length=200)),
                ('paid_intagrampage_image', models.ImageField(default='', upload_to=sample_app.models.get_image_filename)),
                ('paid_youtubepage_text', ckeditor.fields.RichTextField(default='', max_length=200)),
                ('paid_youtubepage_image', models.ImageField(default='', upload_to=sample_app.models.get_image_filename)),
                ('paid_googlepage_text', ckeditor.fields.RichTextField(default='', max_length=200)),
                ('paid_googlepage_image', models.ImageField(default='', upload_to=sample_app.models.get_image_filename)),
            ],
            options={
                'verbose_name_plural': 'PaidPromotionAdsLink & Image',
            },
        ),
        migrations.AlterModelOptions(
            name='contactform',
            options={'verbose_name_plural': 'UserData'},
        ),
        migrations.AlterModelOptions(
            name='eighthsection',
            options={'verbose_name_plural': 'Client_logos'},
        ),
        migrations.AlterModelOptions(
            name='facebookpage',
            options={'verbose_name_plural': 'DM_Facebook_Page'},
        ),
        migrations.AlterModelOptions(
            name='fifthsection',
            options={'verbose_name_plural': 'Ourservice_Data'},
        ),
        migrations.AlterModelOptions(
            name='fifthsectioncontent',
            options={'verbose_name_plural': 'Ourservice_Box_Data'},
        ),
        migrations.AlterModelOptions(
            name='firstsection',
            options={'verbose_name_plural': 'Home_Section_Data'},
        ),
        migrations.AlterModelOptions(
            name='fourthsection',
            options={'verbose_name_plural': 'Protfolio_Data'},
        ),
        migrations.AlterModelOptions(
            name='fourthsectionbanner',
            options={'verbose_name_plural': 'Portfolio_Banner'},
        ),
        migrations.AlterModelOptions(
            name='googlepage',
            options={'verbose_name_plural': 'DM_Google_Page'},
        ),
        migrations.AlterModelOptions(
            name='instagrampage',
            options={'verbose_name_plural': 'DM_Instagram_Page'},
        ),
        migrations.AlterModelOptions(
            name='secondsection',
            options={'verbose_name_plural': 'About_Section_Data'},
        ),
        migrations.AlterModelOptions(
            name='seventhsection',
            options={'verbose_name_plural': 'Quote_Data'},
        ),
        migrations.AlterModelOptions(
            name='sixthsection',
            options={'verbose_name_plural': 'Testimonial_Data'},
        ),
        migrations.AlterModelOptions(
            name='sixthsectiontest',
            options={'verbose_name_plural': 'Testimonial_Review'},
        ),
        migrations.AlterModelOptions(
            name='thirdsection',
            options={'verbose_name_plural': 'Services_Data'},
        ),
        migrations.AlterModelOptions(
            name='whatsapp',
            options={'verbose_name_plural': 'Whatsapp_Data'},
        ),
        migrations.AlterModelOptions(
            name='youtubepage',
            options={'verbose_name_plural': 'DM_Youtube_Page'},
        ),
    ]
