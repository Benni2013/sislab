const express = require('express')
const router = express.Router()
const controller = require('../controller/editprofil')

router.get('/showeditProfil', controller.showEdit)
router.post('/updateprofil', controller.editProfil)
  
module.exports = router; 