// const modeluser = require('../models/user')
const {
  PeminjamanRuangan,
  PeminjamanTa,
  User,
  surat,
} = require("../../../models/association");

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};
const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: "views/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("lampiran");


function checkFileType(file, cb) {
  const filetypes = /pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: PDFs Only!");
  }
}

const addSurat = async (req, res) => {
  try {
    res.render("mahasiswa/kelola/tambahSurat");
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};

const createSurat = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    const { nama_surat } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const id_penerima = 1; // Ini mungkin perlu diubah atau diambil dari req.body atau sumber lain

      // Pastikan req.user.id_user tersedia
      if (!req.user || !req.user.id_user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Create the new surat with id_penerima assigned
      const newSurat = await surat.create({
        id_user: req.user.id_user,
        id_penerima, // Assign id_penerima
        nama_surat,
        lampiran: req.file.filename,
      });

      res.redirect("/mahasiswa/LDKelola");
    } catch (error) {
      console.error("Error creating surat: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
};

module.exports = {
  addSurat,
  createSurat,
};
