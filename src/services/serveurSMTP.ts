import { Transporter } from "nodemailer";

const hostname = "smtp.ionos.fr";
const username = "ne_pas_repondre@corbisier.fr";
const password = "Einstein:2020#";
const nodemailer = require("nodemailer");
const port = 465;

export const transporter: Transporter = nodemailer.createTransport({
  host: hostname,
  port: port,
  secure: true,
  requireTLS: false,
  auth: {
    user: username,
    pass: password,
  },
  logger: true,
});
