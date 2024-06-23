const express = require('express')
const router = express.Router()
const dataAkun = require('../../controller/admin/dataAkunController')


// data akun pengguna
router.get('/list-akun', dataAkun.showListAkun);
router.get('/lihat-akun', dataAkun.showLihatAkun);
router.get('/edit-akun', dataAkun.showEditAkun);
router.get('/tambah-akun', dataAkun.showTambahAkun);


module.exports = router; 