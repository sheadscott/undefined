const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const sgMail = require("./api/sendgrid");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });

  server.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
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

        //Extract error msg
        const { message, code, response } = error;

        //Extract response msg
        const { headers, body } = response;
      });
  });
});
