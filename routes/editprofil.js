const express = require('express')
const router = express.Router()
const controller = require('../controller/editprofil')

router.get('/', controller.showEdit)
  
module.exports = router; 