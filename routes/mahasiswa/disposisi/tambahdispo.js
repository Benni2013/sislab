const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/disposisi/tambahdispo");
// const middleware = require("../../../middleware/verifyToken");

router.get("/tambahDisposisi", /*middleware.verifyToken,*/ controller.addDispo);

module.exports = router;