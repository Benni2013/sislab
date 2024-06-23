const express = require('express')
const router = express.Router()
const controller = require('../controller/editprofil')
const middleware = require('../middleware/verifyToken')

router.get('/showeditProfil', middleware.verifyToken, controller.showEdit)
router.post('/updateprofil', middleware.verifyToken, controller.editProfil)
  
module.exports = router;    