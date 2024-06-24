const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/formulir/formulirPR");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/formulirPR", verifyToken, controller.showPR);
router.post('/createFormulirPR', controller.saveFormulirPR);

module.exports = router; 