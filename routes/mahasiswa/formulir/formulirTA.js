const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/formulir/formulirTA");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/formulirTA", verifyToken, controller.showFTA);
router.post('/createFormulirTA', controller.saveFormulirTA);
module.exports = router;