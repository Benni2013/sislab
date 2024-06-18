const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/lihatSurat");
// const middleware = require("../../../middleware/verifyToken");

router.get("/lihatSurat", /*middleware.verifyToken,*/ controller.lihatSurat);

module.exports = router;