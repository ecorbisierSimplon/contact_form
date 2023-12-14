import nodemailer, { Transporter } from "nodemailer";
// import Mail from "nodemailer/lib/mailer"; // Cette ligne n'est pas nécessaire


async function main() {
  const hostname = "hostname from account page";
  const username = "username from account page";
  const password = "password from account page";

  const transporter: Transporter = nodemailer.createTransport({
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true,
  });
}
