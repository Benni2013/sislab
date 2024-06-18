const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/formulir/landingPageForm");
// const middleware = require("../../../middleware/verifyToken");

router.get("/LDForm", /*middleware.verifyToken,*/ controller.showLDF);

module.exports = router;
