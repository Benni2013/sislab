const express = require("express");
const router = express.Router();
const controller = require("../../../controller/mahasiswa/kelola/editSurat");
const verifyToken = require("../../../middleware/verifyToken");
const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: "views/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Inisialisasi multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Batas ukuran file 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("lampiran");

// Fungsi untuk memeriksa jenis file
function checkFileType(file, cb) {
  // Izinkan ekstensi file
  const filetypes = /pdf/;
  // Periksa ekstensi
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Periksa MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: PDF Files Only!');
  }
}

router.post('/editSurat/:id', upload, controller.updateSurat);

router.get("/editSurat/:id", verifyToken, controller.editSurat);
router.get("/hapusSurat/:id", verifyToken, controller.hapusSurat);
router.post('/disposisi', verifyToken, controller.createDisposisi);


module.exports = router;