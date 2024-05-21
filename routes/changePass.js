const express = require('express')
const router = express.Router()
const controller = require('../controller/ubahpassword')

router.get('/ubahpassword', middleware.verifyToken, controller.ubahpassword)
router.post('/ubahpassword', middleware.verifyToken, controller.formubahpassword)

    
module.exports = router;    