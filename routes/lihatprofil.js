const express = require('express');
const router = express.Router();
const middleware = require('../middleware/verifyToken')
const profilController = require('../controller/lihatprofil');

// Route untuk halaman lihatprofil
router.get('/lihatprofil', middleware.verifyToken,profilController.lihatProfil);

module.exports = router;