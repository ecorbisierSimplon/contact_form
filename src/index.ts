import express, { Express, Request, Response, Application } from "express";
import session from 'express-session';
import dotenv from "dotenv";

//For env File
dotenv.config();

export const app: Application = express();
export const port = process.env.PORT || 8000;


app.set("view engine", "pug");
app.set("views", "./src/views");
app.listen(port, () => {
    console.log("Server is Fire at http://localhost:" + port);
});
app.use(express.static('styles'));

import "./routes/home";
import "./routes/contact";
