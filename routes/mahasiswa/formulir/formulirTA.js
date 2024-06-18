const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/formulir/formulirTA");
// const middleware = require("../../../middleware/verifyToken");

router.get("/formulirTA", /*middleware.verifyToken,*/ controller.showFTA);

module.exports = router;