FROM node:21

# Installation de nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Chargement de nvm
SHELL ["/bin/bash", "--login", "-c"]

# Installation de Node.js v21.04
RUN nvm install 21 && \
    nvm use 21

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json dans le conteneur
COPY package.json /app/package.json

# Installation des dépendances du projet
RUN npm install

# Copier les fichiers de votre application dans le conteneur
COPY . /app

# Installation des dépendances du projet
RUN npm install

# Installation des dépendances du projet
RUN npm install express && \
    npm install express-session && \
    npm install @types/express-session --save-dev


# Copier le fichier tsconfig.json dans le conteneur
COPY tsconfig.json /app/tsconfig.json


# Compilation du projet TypeScript
RUN npm install typescript@5.3.2 && \
    npm run build

# Exposez le port sur lequel l'application s'exécute (si nécessaire)
EXPOSE 8000


# Commande par défaut pour démarrer votre application
CMD ["node", "start.js"]
