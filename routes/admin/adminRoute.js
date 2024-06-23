const express = require('express')
const router = express.Router()
const dashboard = require('../../controller/admin/dashboardController')
const dataAkunRoute = require('./dataAkunRoute')
const dataSuratRoute = require('./dataSuratRoute')


router.get('/dashboard', dashboard.showDashboard);

router.use('/data-akun', dataAkunRoute)

router.use('/data-surat', dataSuratRoute)


module.exports = router; 