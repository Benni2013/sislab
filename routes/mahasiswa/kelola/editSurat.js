const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/editSurat");
// const middleware = require("../../../middleware/verifyToken");

router.get("/editSurat", /*middleware.verifyToken,*/ controller.editSurat);

module.exports = router;