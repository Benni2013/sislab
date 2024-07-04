const express = require('express')
const router = express.Router()
const dataAkun = require('../../controller/admin/dataAkunController')



router.get('/list-akun', dataAkun.showListAkun);
router.get('/lihat-akun/:id', dataAkun.showLihatAkun);
router.get('/edit-akun/:id', dataAkun.showEditAkun);
router.get('/tambah-akun', dataAkun.showTambahAkun);
router.get('/hapus-akun/:id', dataAkun.hapusAkun);

router.post('/edit-akun/:id', dataAkun.editAkun);
router.post('/tambah-akun', dataAkun.tambahAkun);


module.exports = router; 