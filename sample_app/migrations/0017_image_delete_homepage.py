# Generated by Django 5.0.1 on 2024-03-25 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sample_app', '0016_homepage_delete_firstsection'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(default='', max_length='200')),
                ('subtitle', models.CharField(max_length=200)),
                ('button_text', models.CharField(max_length=50)),
                ('button_link', models.URLField()),
                ('image', models.ImageField(upload_to='images/')),
            ],
        ),
        migrations.DeleteModel(
            name='HomePage',
        ),
    ]
