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
 * @param {String} options.message - Email message body
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
        console.warn(message);
        const createEmail = await db.Emails.create({
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            emailAddress: emailAddress,
            serviceRequested: serviceRequested,
            additionalComments: additionalComments,
        });

        const sendEmail = await transporter.sendMail({
            from: 'Obsidian Cleaning Company',
            to: process.env.EMAIL_USER,
            subject: process.env.EMAIL_SUBJECT,
            text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                Email Address: ${emailAddress}
                Company Name: ${companyName}
                Service Requested: ${serviceRequested}
                Additional Comments: ${additionalComments}
                Date: ${date}
            `
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