# Generated by Django 5.0.1 on 2024-03-23 05:08

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sample_app', '0014_firstsection'),
    ]

    operations = [
        migrations.AlterField(
            model_name='firstsection',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True),
        ),
    ]
