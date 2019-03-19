// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API);

const server = express();
server.use(bodyParser.json());

server.listen(3000, err => {
  if (err) throw err;
  console.log("> Read on http://localhost:3000");
});

server.post("*", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  // res.send("success");
  const msg = {
    to: "sheadscott@gmail.com",
    from: "shea@sheadscott.com",
    subject: "Sending with SendGrid is Fun",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send("success");
    })
    .catch(error => {
      //Log friendly error
      console.error(error.toString());
    });
});
