# contact_form


Install Docker-compose : 
```nginx=
sudo apt docker-compose
```
make sur you are on the late version :
```nginx= sudo apt update ```

Your have install Docker compose.

##  Create Docker Image for project

1. Open docker-compose.yml
2. Copy or change and copy name to image of web service (by default : projetformcontact)
3. Save docker-compose.yml
4. Edit in terminal :

```nginx
docker build -t <name_to_your_image>
```



you can run the docker-compose with 
```nginx= 
Docker-compose up 
```
