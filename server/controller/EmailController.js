const emailService = require('../service/EmailService');

const requestEstimate = async (req, res) => {
    try {
        const { message } = req.body;
        const { emailInfo, savedEmail } = await emailService.requestEstimate({message});
        res.status(200).json({
            message: 'Request successfully sent!',
            emailInfo,
            savedEmail
        })
    } catch (error) {
        console.error('Error sending email: ', error.message);
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    requestEstimate
};