# Étape de construction
FROM node:21-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json pour installer les dépendances seulement
COPY . /app/

RUN mkdir -p ./DataBase/postgres-data

RUN chmod -R 777 ./DataBase/postgres-data

# Installation des dépendances du projet
RUN npm install