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
            additionalComments
        } = message;

        const saveEmail = await db.Emails.create({
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
            html: `
                <div style="font-size: 16px;">
                    <strong>First Name:</strong> ${firstName}<br/>
                    <strong>Last Name:</strong> ${lastName}<br/>
                    <strong>Email Address:</strong> ${emailAddress}<br/>
                    <strong>Company Name:</strong> ${companyName}<br/>
                    <strong>Service Requested:</strong> ${serviceRequested}<br/>
                    <strong>Additional Comments:</strong> ${additionalComments}
                </div>
            `
        });

        return { saveEmail, sendEmail };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = {
    requestEstimate,
};