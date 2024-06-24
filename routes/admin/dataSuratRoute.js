const express = require('express')
const router = express.Router()
const dataSurat = require('../../controller/admin/dataSuratController')

// data surat
router.get('/surat-masuk', dataSurat.showSuratMasuk);
router.get('/surat-keluar', dataSurat.showSuratKeluar);
router.get('/lihat-surat', dataSurat.showLihatSurat);


module.exports = router; 