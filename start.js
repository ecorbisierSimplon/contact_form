const express = require('express');
const app = express();
const port = process.env.PORT || 8000; // Utilisez le port spécifié dans l'environnement ou 8000 par défaut

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});