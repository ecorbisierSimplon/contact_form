import { transporter } from "./serveurSMTP"
import template from 'string-template';
import { HtmlText } from "../controllers/htmlText";
import dotenv from "dotenv";
dotenv.config();

const mail_send = process.env.SMTP_EMAIL_SEND || "no_reply@gmail.com";
const mail_name = process.env.SMTP_EMAIL_SEND_NAME || "Virus 👻";
const mail_admin = process.env.EMAIL_ADMIN_RECEPT || "admin@gmail.com";
const mail_img_sign = process.env.EMAIL_IMG_SIGN || "http://localhost:" + process.env.PORT + "/virusgaminglogo.png";

export async function main(subject: string, lastname: string, firstname: string, email: string, phone: string, message: string) {
  // send mail with defined transport object
  message = message.replace(/\n/g, "<br>");

  const mailTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="font-family: sans-serif; background: linear-gradient(to bottom, hsla(265, 27%, 83%, 0.8), hsla(307, 36%, 39%, 0.7));">
      <table style="width:100%;">
        <tr>
          <td colspan="3">
            <h2>Contact Form</h2>
          </td>
        </tr>
        <tr>
          <td style="width: 130px;"><strong>Last Name</strong></td>
          <td style="width: 10px;">&nbsp;:&nbsp;</td>
          <td>{0}</td>
        </tr>
        <tr>
          <td><strong>First Name</strong></td>
          <td>&nbsp;:&nbsp;</td>
          <td>{1}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>&nbsp;:&nbsp;</td>
          <td><a href="mailto:{2}">{2}</a></td>
        </tr>
        <tr>
          <td><strong>Phone</strong></td>
          <td>&nbsp;:&nbsp;</td>
          <td><a href="tel:{3}">{3}</a></td>
        </tr>
        <tr>
           <td><strong>Subject</strong></td>
           <td>&nbsp;:&nbsp;</td>
          <td>{4}</td>
        </tr>
        <tr>
           <td><strong>Message</strong><td colspan="2">&nbsp;:&nbsp;</td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td>{5}</td>
        </tr>
      </table>
      <p>
        Cordialement,
      </p>
      The webmaster,<br>
      <img src="{6}" alt="logo " style="max-width: 100%; height: auto; width: 129px; height: 80px;">
    </body>
  </html>
`;

  const userMessage = [lastname, firstname, email, phone, subject, message, mail_img_sign];
  const mail = template(mailTemplate, ...userMessage);

  const info = await transporter.sendMail({
    from: `"${mail_name}" <${mail_send}>`, // sender address
    to: mail_admin, // list of receivers
    replyTo: email, // "Reply-To" address
    subject: subject, // Subject line
    text: HtmlText.htmlToPlainText(mail), // plain text body
    html: mail, // html body
  });
}

