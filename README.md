# contact_form

> [Download and install DockerDesktop](https://www.docker.com/products/docker-desktop/)


> Install Docker-compose :

```nginx=
sudo apt docker-compose
```

> make sur you are on the late version :

```nginx= 
sudo apt update
```

Your have install Docker compose.

>Change or create general environnement variables in './build/environnements.env' :

* PORT=8000

>Change or create database environment variables in './build/postgres.env' :

* POSTGRES_DB=\< name data-base \>
* POSTGRES_USER=\< postgres's user name \>
* POSTGRES_PASSWORD=\< postgres's password \>

>for the SMTP server in './build/SMTP.env' (leave blank if using devmail):

* SMTP_HOST=\< ip adress or domaine name \>
* SMTP_USERNAME=\< username server smtp \>
* SMTP_PASSWORD=\< password server smtp  \>
* SMTP_PORT=\< smpt port  server smtp (465 if secure) \>
* SMTP_SECURE= \< true or false \>
* SMTP_SECURE_TSL=\< true or false \>
* SMTP_EMAIL_SEND=\< e-mail of type no-reply or other \>
* SMTP_EMAIL_SEND_NAME=\< name to  e-mail of type no-reply or other \>
* EMAIL_ADMIN_RECEPT=\< e-mail of admin web site \>

>and or the maildev server in './build/maildev.env' :

* TZ=Europea/Paris
* MAILDEV_SMTP_PORT=1025
* MAILDEV_WEB_PORT=1080

## Create Docker Image for project

1. Open docker-compose.yml
2. Copy or change and copy name to image of web service (by default : projetformcontact)
3. Save docker-compose.yml
4. Edit in terminal for installing dependancies in local:

```nginx
npm install
```

5. you can run the docker-compose with
 
> Run Docker before run this project :

```nginx=
docker-compose up -d
```

> [Open web serveur for contact form](http://localhost:8000/)

Now you can use our contact-form

>if ./DataBase/postgres-data exist and generate error compilation then type in terminal :

```nginx
sudo chmod -R 777 ./DataBase/postgres-data
``
