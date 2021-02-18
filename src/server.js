const mailgun = require("mailgun-js");
const DOMAIN = 'adewale.me';
const key = apiKey.key;
const mg = mailgun({apiKey: key, domain: DOMAIN});
const sender = document.querySelector('#fullName').value;
const subject = document.querySelector('#subject').value;
const fullName = document.querySelector('#fullName').value;
const email = document.querySelector('#email').value;
const textArea = document.querySelector('#textArea').value;
const data = {
	from: `${sender || (fullName)}  <${email}>`,
	to: 'didymus7007@gmail.com',
	subject: subject,
	text: textArea.value
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});