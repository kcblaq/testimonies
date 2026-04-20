import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_API_TOKEN ?? "";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: process.env.MAILTRAP_SENDER_EMAIL ?? "[EMAIL_ADDRESS]",
  name: process.env.MAILTRAP_SENDER_NAME ?? "Testimonies",
};
const recipients = [
  {
    email: "[EMAIL_ADDRESS]",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    template_uuid: "dff86133-65ec-4d5c-b8fc-ba2d669382f5",
    template_variables:{
      text: "Congrats for sending test email with Mailtrap!",
      token: "John Doe",
    }
  })
  .then(console.log, console.error);