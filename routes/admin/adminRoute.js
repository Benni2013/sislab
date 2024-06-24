const express = require('express')
const router = express.Router()
const dashboard = require('../../controller/admin/dashboardController')
const dataAkunRoute = require('./dataAkunRoute')
const dataSuratRoute = require('./dataSuratRoute')
// const middleware = require("../../middleware/verifyToken");


router.get('/dashboard', /*middleware.verifyToken,*/ dashboard.showDashboard);

router.use('/data-akun', /*middleware.verifyToken,*/ dataAkunRoute)

router.use('/data-surat', /*middleware.verifyToken,*/ dataSuratRoute)


module.exports = router; 