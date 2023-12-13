const sass = require('sass');
const fs = require('fs');

// Chemin du fichier SCSS d'entrée
const inputPath = 'scss/styles.scss';

// Chemin du fichier CSS de sortie
const outputPath = 'styles/layout.css';

// Options de configuration pour la conversion
const options = {
  file: inputPath,
  outFile: outputPath,
};

// Fonction de conversion
sass.render(options, (error, result) => {
  if (error) {
    console.error('Erreur lors de la conversion SCSS en CSS:', error);
  } else {
    // Écriture du fichier CSS résultant
    fs.writeFile(outputPath, result.css, (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture du fichier CSS:', err);
      } else {
        console.log('Conversion SCSS en CSS réussie !');
      }
    });
  }
});
