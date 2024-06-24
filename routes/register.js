// routes/register.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/register');

router.get('/', controller.showRegister);
router.post('/register', controller.register);

module.exports = router;
