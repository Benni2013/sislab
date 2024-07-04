const express = require('express')
const router = express.Router()
const dataSurat = require('../../controller/admin/dataSuratController')


router.get('/surat-masuk', dataSurat.showSuratMasuk);
router.get('/surat-keluar', dataSurat.showSuratKeluar);
router.get('/lihat-surat/:id_surat', dataSurat.showLihatSurat);


module.exports = router; 