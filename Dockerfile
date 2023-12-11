# Étape de construction
FROM node:21-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json pour installer les dépendances seulement
COPY . /app/

# Installation des dépendances du projet
RUN npm install

# Copier le fichier tsconfig.json dans le conteneur
# COPY tsconfig.json /app/tsconfig.json

# Compilation du projet TypeScript
RUN npm install typescript@latest && \
    npm run build

# Exposez le port sur lequel l'application s'exécute (si nécessaire)
EXPOSE 8000
