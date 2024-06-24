const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/disposisi/tambahdispo");
const verifyToken = require("../../../middleware/verifyToken");

router.get("/tambahDisposisi", /*middleware.verifyToken,*/ controller.addDispo);


module.exports = router;