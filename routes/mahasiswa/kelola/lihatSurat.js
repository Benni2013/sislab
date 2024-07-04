const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/lihatSurat");
// const middleware = require("../../../middleware/verifyToken");

router.get("/lihatSurat/:id", /*middleware.verifyToken,*/ controller.lihatSurat);

module.exports = router;