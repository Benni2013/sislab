const express = require('express')
const router = express.Router()
const controller = require('../controller/loginController')

router.get('/', controller.showLoginMhs)
router.get('/office', controller.showLoginOffice)
router.get('/lupa-pw', controller.showLupaPassword)

router.post('/newpassword', controller.lupaPassword)
router.post('/login', controller.checklogin)


module.exports = router; 