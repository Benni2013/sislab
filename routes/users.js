const express = require('express')
const router = express.Router()
const controller = require('../controller/ubahpassword')

router.get('/', controller.tampilKategori)




module.exports = router;