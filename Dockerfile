# Étape de construction
FROM node:21-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json pour installer les dépendances seulement
COPY . /app/

# Installation des dépendances du projet
RUN npm install