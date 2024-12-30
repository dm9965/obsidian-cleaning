const express = require('express');
const emailController = require('../controller/EmailController')
const router = express.Router();

router.post('/send', emailController.requestEstimate);

module.exports = {
    router
};