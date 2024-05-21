const express = require('express');
const router = express.Router();

// Mengimpor controller
const profilController = require('./controllers/profilController');

// Route untuk halaman lihatprofil
router.get('/lihatprofil', profilController.lihatProfil);

module.exports = router;