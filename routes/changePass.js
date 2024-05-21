const express = require('express')
const router = express.Router()
const controller = require('../controller/ubahpassword')
const middleware =require('../middleware/verifyToken')

router.get('/ubahpassword', middleware.verifyToken, controller.ubahpassword)
router.post('/ubahpassword', middleware.verifyToken, controller.formubahpassword)

    
module.exports = router;    