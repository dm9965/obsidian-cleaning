const nodemailer = require('nodemailer');
require('dotenv').config();
const db = require('../database')

const transporter = nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/**
 * @param {Object} options - Email options
 * @param {Object} options.message - Email message body
 */
const requestEstimate = async ({ message }) => {
    try {
        const {
            firstName,
            lastName,
            companyName,
            emailAddress,
            serviceRequested,
            additionalComments,
            date
        } = message;

        const createEmail = await db.Emails.create({
            firstName,
            lastName,
            companyName,
            emailAddress,
            serviceRequested,
            additionalComments,
            date
        });

        const sendEmail = await transporter.sendMail({
            from: emailAddress,
            to: process.env.EMAIL_USER,
            subject: process.env.EMAIL_SUBJECT,
            text: {
                firstName,
                lastName,
                companyName,
                serviceRequested,
                additionalComments,
                date
            },
        });

        return await Promise.all([ createEmail, sendEmail ]);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = {
    requestEstimate,
};