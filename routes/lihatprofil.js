const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const profilController = require('../controller/lihatprofil');

// Route untuk halaman lihatprofil
router.get('/lihatprofil', verifyToken,profilController.lihatProfil);

module.exports = router;