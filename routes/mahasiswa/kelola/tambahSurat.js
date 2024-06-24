const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/tambahSurat");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/tambahSurat", verifyToken,controller.addSurat);
router.post("/createSurat",  verifyToken,controller.createSurat);

module.exports = router;
