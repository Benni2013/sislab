// routes/changePass.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/ubahpassword');
const verifyToken = require('../middleware/verifyToken');

router.post('/ubahpassword', verifyToken, controller.ubahpassword);
router.get('/ubahpassword', verifyToken, controller.formubahpassword);

module.exports = router;
