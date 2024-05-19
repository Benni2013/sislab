const express = require('express')
const router = express.Router()
const controller = require('../controller/ubahpassword')

router.post('/', controller.ubahpassword)



    
module.exports = router;    