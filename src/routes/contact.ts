import express, { Express, Request, Response } from "express";
import { app } from "../index";
import { MessageSendSave } from "../models/MessageSend";
import { ControllersMessageSend } from "../controllers/controllersMessageSend";
import { main } from "../services/MessageSend";

const pageTitleContact: string = "Contact us";

app.get("/contact", (req: Request, res: Response) => {
  res.render("contact", { pageTitle: pageTitleContact, contact: true });
});

app.post("/submit-contact", async (req: Request, res: Response) => {
  // Récupération des données du formulaire à partir de la requête
  console.log(req.body);
  const {
    lastname,
    firstname,
    email,
    phone,
    subject,
    message
  } = req.body;

  let messageSave: boolean = false;
  let errors_message: { [key: string]: string | null } = {};


  errors_message = ControllersMessageSend.validateMessageInputs(subject, lastname, firstname, email, phone, message);
  console.log("routes contact : ");
  console.log(errors_message);

  if (errors_message.validation === "true") {
    main(subject, lastname, firstname, email, phone, message).catch(console.error);
    try {
      // AJOUT DE L'ENVOIE DU MESSAGE PAR MAIL
      console.log("routes contact : validation true");

      messageSave = await MessageSendSave.saveDatabase(subject, lastname, firstname, email, phone, message);

      // SI MESSAGE BIEN ENVOYÉ
      if (messageSave) {
        res.status(201).render("contact", {
          pageTitle: pageTitleContact,
          messageSuccess: "Your message has been sent!",
          contact: true
        });


      } else {
        // AJOUTER MESSAGE SI PAS ENVOYÉ OU SI PAS ENREGISTER
        res.status(500).render("contact", {
          pageTitle: pageTitleContact,
          messageNosuccess: "Error saving message in database",
          contact: true
        });
      }

    } catch (error) {
      console.error("Error during contact:", error);
      res.status(500).render("contact", {
        pageTitle: pageTitleContact,
        messageNosuccess: "Contact error",
        contact: true
      });
    }

  } else {
    res.render("contact", {
      pageTitle: pageTitleContact,
      messageNosuccess: "Error !",
      messageErrorSubject: errors_message.subject,
      messageErrorEmail: errors_message.email,
      messageErrorPhone: errors_message.phone,
      messageErrorFirstname: errors_message.firstname,
      messageErrorLastname: errors_message.lastname,
      messageErrorMessage: errors_message.message,
      getsubject: subject,
      getlastname: lastname,
      getfirstname: firstname,
      getemail: email,
      getmessage: message,
      getphone: phone,
      contact: true
    });
  }
});
