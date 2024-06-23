const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/landingPageKel");
// const middleware = require("../../../middleware/verifyToken");

router.get("/LDKelola", /*middleware.verifyToken,*/ controller.showLDK);

module.exports = router;