import { Transporter } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const hostname = process.env.SMTP_HOST || "smtp.ionos.fr";
const username = process.env.SMTP_USERNAME || "ne_pas_repondre@corbisier.fr";
const password = process.env.SMTP_PASSWORD || "";
const port = parseInt(process.env.SMTP_PORT || "465", 10); // then convert the result to an integer using base 10 (decimal system).
const nodemailer = require("nodemailer");

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