const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/disposisi/landingPageDisposisi");
// const middleware = require("../../../middleware/verifyToken");

router.get("/LDDisposisi", /*middleware.verifyToken,*/ controller.showLDD);

module.exports = router;
