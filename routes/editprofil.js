const express = require('express')
const router = express.Router()
const controller = require('../controller/editprofil')
const verifyToken = require('../middleware/verifyToken');

router.get('/showeditProfil', verifyToken, controller.showEdit)
router.post('/updateprofil', verifyToken, controller.editProfil)
  
module.exports = router;    