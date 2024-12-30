const nodemailer = require('nodemailer');
require('dotenv').config();
const { Email } = require('../database/models')

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
 * Send an email to a user.
 * @param {Object} options - Email options
 * @param {string} options.message - Email message body
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
        const email = await transporter.sendMail({
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
        return email;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = {
    requestEstimate,
};