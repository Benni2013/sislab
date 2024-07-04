const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/disposisi/landingPageDisposisi");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/LDDisposisi", verifyToken, controller.showLDD);
router.get("/hapusSuratDisposisi/:id_surat", verifyToken, controller.hapusSuratDisposisi);


module.exports = router;
