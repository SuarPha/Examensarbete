require('dotenv').config()

const sgMail = require('@sendgrid/mail')

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env

sgMail.setApiKey(SG_API_KEY)

export default async function handler(req, res){
    const {name, email, subject, message } = req.body;

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: "Online Pizza Test Contact Form",
        html: `<div><h2>Name:</h2>${name}</div>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Subject:</strong>${subject}</p>
                <p><strong>Message:</strong>${message}</p>
        `
    }
    await sgMail.send(msg)
    res.json ({ success: true });
}