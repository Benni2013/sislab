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


// Controller updateSurat
const updateSurat = async (req, res) => {
  const id = req.params.id;

  try {
    // Cari surat berdasarkan id
    const foundSurat = await surat.findByPk(id);

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    // Pastikan nama_surat tidak null atau undefined
    if (!req.body.nama_surat) {
      return res.status(400).json({ message: "Nama surat cannot be null" });
    }

    // Update data surat berdasarkan input dari form
    foundSurat.nama_surat = req.body.nama_surat;

    // Cek apakah ada lampiran yang diunggah
    if (req.file) {
      foundSurat.lampiran = req.file.filename; // filename disesuaikan dengan tempat penyimpanan file Anda
    }

    // Simpan perubahan surat
    await foundSurat.save();

    // Redirect atau kirim respons sukses
    res.status(200).json({ message: "Surat successfully updated" });
  } catch (error) {
    console.error('Error:', error);
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