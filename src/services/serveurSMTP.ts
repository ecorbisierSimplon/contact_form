import nodemailer, { Transporter } from "nodemailer";
// import Mail from "nodemailer/lib/mailer"; // Cette ligne n'est pas nécessaire


async function main() {
  const hostname = "smtp.ionos.fr";
  const username = "ne_pas_repondre@corbisier.fr";
  const password = "Einstein:2020#";

  const transporter: Transporter = nodemailer.createTransport({
    host: hostname,
    port: 465,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true,
  });
}
