const express = require('express')
const router = express.Router()
const dashboard = require('../../controller/admin/dashboardController')
const dataAkunRoute = require('./dataAkunRoute')
const dataSuratRoute = require('./dataSuratRoute')
const verifyToken = require("../../middleware/verifyToken");


router.get('/dashboard', verifyToken, dashboard.showDashboard);

router.use('/data-akun', verifyToken, dataAkunRoute)

router.use('/data-surat', verifyToken, dataSuratRoute)


module.exports = router; 