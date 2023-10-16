const path = require('path');
const express = require('express');
const transporter = require('./config');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(cors());
app.use(express.json());
app.use(express.static(buildPath));

function sendEmail({ email, name, message }) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: name, // Subject line
      html: `
    <p>You have a new contact request.</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Message: ${message}</li>
    </ul>
    `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: 'Email sent succesfuly' });
    });
  });
}

app.post('/send', (req, res) => {
  console.log(req);
  sendEmail(req.body)
    .then((response) => {
      console.log(response);
      res.send(response.message);
    })
    .catch((error) => res.status(500).send(error.message));
});

app.listen(3000, () => {
  console.log('server start on port 3000');
});
