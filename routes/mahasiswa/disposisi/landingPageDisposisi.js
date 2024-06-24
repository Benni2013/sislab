const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/disposisi/landingPageDisposisi");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/LDDisposisi", verifyToken, controller.showLDD);
router.get("/hapusSurat/:id", verifyToken, controller.hapusSurat);

module.exports = router;
