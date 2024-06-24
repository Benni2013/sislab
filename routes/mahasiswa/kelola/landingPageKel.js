const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/landingPageKel");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/LDKelola", verifyToken,controller.showLDK);

module.exports = router;