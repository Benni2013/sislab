const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/disposisi/editDispo");
// const middleware = require("../../../middleware/verifyToken");

router.get("/editDisposisi", /*middleware.verifyToken,*/ controller.showEditDispo);

module.exports = router;