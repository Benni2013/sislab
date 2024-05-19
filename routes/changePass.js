const express = require('express')
const router = express.Router()
const controller = require('../controller/ubahpassword')

router.post('/ubahpassword', controller.ubahpassword)
router.get('/ubahpassword', controller.formubahpassword)



    
module.exports = router;    