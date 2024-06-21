import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_APP_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD
    },
});