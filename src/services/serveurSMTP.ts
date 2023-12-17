import { Transporter } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const hostname = process.env.SMTP_HOST || "maildev";
const username = process.env.SMTP_USERNAME || "";
const password = process.env.SMTP_PASSWORD || "";
const secure: boolean = process.env.SMTP_SECURE === "true" || false;
const secureTsl: boolean = process.env.SMTP_SECURE_TSL === "true" || false;
const port = parseInt(process.env.SMTP_PORT || "1025", 10);
const nodemailer = require("nodemailer");


interface MailerConfig {
  host: string;
  port: number;
  secure: boolean;
  requireTLS: boolean;
  auth: {
    user: string;
    pass: string;
  };
  logger: boolean;
  tls?: {
    rejectUnauthorized: boolean;
  };
}

const transporterOptions: MailerConfig = {
  host: hostname,
  port: port,
  secure: secure,
  requireTLS: secureTsl,
  auth: {
    user: username,
    pass: password,
  },
  logger: true,
};

// Ajouter l'option tls uniquement si vous utilisez DevMail
if (hostname === "maildev") {
  transporterOptions.tls = {
    rejectUnauthorized: false,
  };
}

export const transporter: Transporter = nodemailer.createTransport(transporterOptions);
