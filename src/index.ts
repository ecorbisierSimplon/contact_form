import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';


//For env File
dotenv.config();

export const app: Application = express();
export const port = process.env.PORT || 8000;

// Ajoutez le middleware d'analyse de corps JSON
app.use(bodyParser.json());

// Ajoutez le middleware pour les données de formulaire
app.use(bodyParser.urlencoded({ extended: true }));


// Configuration of the Pug rendering engine
app.set("view engine", "pug");
app.set("views", "./src/views");
app.listen(port, () => {
    console.log("Server is Fire at http://localhost:" + port);
});
app.use(express.static('styles'));

import "./routes/home";
import "./routes/contact";
