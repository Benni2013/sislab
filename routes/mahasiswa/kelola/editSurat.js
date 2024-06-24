const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/editSurat");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/editSurat/:id", verifyToken, controller.editSurat);
router.post("/editSurat/:id", verifyToken, controller.updateSurat);
router.get("/hapusSurat/:id", verifyToken, controller.hapusSurat);
router.post('/disposisi', verifyToken, controller.createDisposisi);


module.exports = router;