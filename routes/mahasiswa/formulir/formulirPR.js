const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/formulir/formulirPR");
// const middleware = require("../../../middleware/verifyToken");

router.get("/formulirPR", /*middleware.verifyToken,*/ controller.showPR);

module.exports = router;