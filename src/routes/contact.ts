import express, { Express, Request, Response, Application } from "express";
import { app } from "../index";
import { insertUser } from "../models/contact";
import { ControllerUser } from "../controllers/contactcontroller";



app.get("/contact", (req: Request, res: Response) => {
  res.render("Contact", { pageTitle: "Contact" });
});

export let subject : string;
export let email: string;
export let lastname: string;
export let firstname: string;
export let currentDate: Date;
export let message: string;
export let errors_message: { [key: string]: string };

app.get ("/contact" , async (req: Request, res: Response) => {
  // Récupération des données du formulaire à partir de la requête
  subject = req.query.subject as string;
  lastname = req.query.lastname as string;
  firstname = req.query.firstname as string;
  email = req.query.email as string;
  currentDate = new Date();
  message =req.query.message as string;
  errors_message = {};

  // AJOUT DES CLASSES DE CONTROLE
  // ...
  ControllerUser.validateUserInputs();

  if (errors_message.validation === "true") {
    // traitement de la réponse isValid

        if ("") {
          res.status(500).render("contact", {
            pageTitle: "Contact",
            messageNosuccess: "Error !",
            messageErrorEmail: errors_message.email,
            getsubject: subject,
            getlastname: lastname,
            getfirstname: firstname,
            getemail: email,
            getmessage: message,
          });

          try {
            await insertUser(currentDate);
            res.render("register", {
              pageTitle: "Form contact",
              messageSuccess: "Message envoyé!",
            });
          } catch (error) {
            console.error("Error during contact:", error);
            res.status(500).render("contact", {
              pageTitle: "Contact",
              messageNosuccess: "Erreur lors de la prise de contact",
            });
      }

    }
  }
});