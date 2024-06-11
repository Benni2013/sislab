const express = require('express')
const router = express.Router()
const controller = require('../controller/adminController')

router.get('/sidebar', controller.showSidebar)
router.get('/dashboard', controller.showDashboard)



module.exports = router; 