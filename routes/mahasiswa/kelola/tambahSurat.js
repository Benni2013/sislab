const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/tambahSurat");
// const middleware = require("../../../middleware/verifyToken");

router.get("/tambahSurat", /*middleware.verifyToken,*/ controller.addSurat);

module.exports = router;
