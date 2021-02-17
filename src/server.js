<<<<<<< HEAD
const express = require('express');
const app = express();

const log = console.log;
const path = require('path');

const PORT = 8080;

app.get('/')
=======
const mailgun = require("mailgun-js");
const DOMAIN = 'adewale.me';
const key = apiKey.key;
const mg = mailgun({apiKey: key, domain: DOMAIN});
const firstName = document.querySelector('#firstName').value;
const lastName = document.querySelector('#lastName').value;
const fullName = document.querySelector('#fullName').value;
const email = document.querySelector('#email').value;
const textArea = document.querySelector('#textArea').value;
const data = {
	from: `${(firstName + lastName) || (fullName)}  <me@samples.mailgun.org>`,
	to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
>>>>>>> 89723ab (fixes)
