import nodemailer from "nodemailer";
//import Mail from "nodemailer/lib/mailer";


async function main() {
  const = "hostname from account page";
  const = "username from account page";
  const = "password from account page";

  const transporter = nodemailer.createTransport({
    host: smtp.ionos.fr,
    port: 465,
    secure: false,
    requireTLS: true,
    auth: {
      user: "ne_pas_repondre@corbisier.fr",
      pass: "Einstein:2020#",
    },
    logger: true
  });}