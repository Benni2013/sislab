const express = require('express')
const router = express.Router()
const controller = require('../controller/editprofil')

router.get('/editProfil', controller.showEdit)
  
module.exports = router; 