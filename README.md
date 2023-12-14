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


