# Utilisez une image de base appropriée avec Node.js
FROM node

# Mise à jour des packages et installation de Node.js et npm
RUN apt-get update && \
    apt-get install -y nodejs && \
    apt-get install -y npm

# Installation de nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Chargement de nvm
SHELL ["/bin/bash", "--login", "-c"]

# Installation de Node.js v21.04
RUN nvm install 21 && \
    nvm use 21

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de votre application dans le conteneur
COPY . /app

# Installation des dépendances du projet
RUN npm cache clean --force && \
    npm install express-session && \
    npm install @types/express-session --save-dev && \
    npm cache clean --force


# Copier les fichiers de votre application dans le conteneur
COPY package.json /app/package.json

# Copier le script de démarrage dans le conteneur
COPY start.js /app/start.js

# Installation des dépendances du projet
RUN npm install

# Commande par défaut pour démarrer votre application
CMD ["node", "start.js"]
