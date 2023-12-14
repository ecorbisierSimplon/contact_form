import { Transporter } from "nodemailer";
// import Mail from "nodemailer/lib/mailer"; // Cette ligne n'est pas nécessaire


  const hostname = "smtp.ionos.fr";
  const username = "ne_pas_repondre@corbisier.fr";
  const password = "Einstein:2020#";
  const nodemailer = require("nodemailer");
  const port = 465;
  export const transporter = nodemailer.createTransport({
    host: hostname,
    port: port,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,

    },
    logger: true,
  });

