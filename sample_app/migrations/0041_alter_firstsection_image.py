# Generated by Django 5.0.1 on 2024-04-12 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sample_app', '0040_alter_firstsection_title_alter_fourthsection_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='firstsection',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
