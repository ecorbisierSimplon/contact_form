import { transporter } from "./serveurSMTP"

import { HtmlText } from "../controllers/htmlText";


export async function main(subject: string, lastname: string, firstname: string, email: string, phone: string, message: string) {
  // send mail with defined transport object
  const userMessage: string = `<h2>Contact Form Submission</h2><p><strong>Last Name:</strong> ${lastname}</p><p><strong>First Name:</strong> ${firstname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><h3>Message:</h3><p>${message}</p>`;
  const info = await transporter.sendMail({
    from: '"👻" <ne_pas_repondre@corbisier.fr>', // sender address
    to: "eric@corbisier.fr", // list of receivers
    subject: subject, // Subject line
    text: HtmlText.htmlToPlainText(userMessage), // plain text body
    html: userMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

