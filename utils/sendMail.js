const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (to, subject, htmlMessage) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  console.log("Email:", process.env.GMAIL_USER);
  console.log("PASS:", process.env.GMAIL_PASS);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    html: htmlMessage,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
