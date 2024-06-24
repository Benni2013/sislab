// const modeluser = require('../models/user')

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const surat = require('../../../models/surat')
const Disposisi = require('../../../models/disposisi')
const user = require('../../../models/user')
const bcrypt = require("bcrypt");
const controller = {};

const editSurat = async (req, res) => {
  try {
    const id = req.params.id;
    const foundSurat = await surat.findByPk(id);

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    res.render("mahasiswa/kelola/editSurat", { surat: foundSurat });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const updateSurat = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_surat } = req.body;

    const foundSurat = await surat.findByPk(id);

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    // Update nama_surat jika ada perubahan
    if (nama_surat) {
      foundSurat.nama_surat = nama_surat;
    }

    // Handle upload file lampiran
    if (req.file) {
      foundSurat.lampiran = req.file.filename;
    }

    // Simpan perubahan surat
    await foundSurat.save();

    res.redirect("/mahasiswa/LDKelola");
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const hapusSurat = async (req, res) => {
  try {
    const id = req.params.id;
    const foundSurat = await surat.findByPk(id);

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    // Hapus surat dari database
    await foundSurat.destroy();

    // Beri respons berhasil dihapus
    res.redirect('/mahasiswa/LDKelola')

  } catch (error) {
    console.error("Error saat menghapus surat:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus surat" });
  }
};

const createDisposisi = async (req, res) => {
  try {
    const { id_surat, id_user, id_penerima } = req.body;

    // Validate the data here if needed
    if (!id_surat || !id_user || !id_penerima) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newDisposisi = await Disposisi.create({
      id_surat,
      id_user,
      id_penerima
    });

    res.status(201).json({ message: "Disposisi created successfully", data: newDisposisi });
  } catch (error) {
    console.error("Error creating disposisi:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




module.exports = {
  editSurat,
  updateSurat,
  hapusSurat,
  createDisposisi
};