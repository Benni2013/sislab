// const modeluser = require('../models/user')

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const Disposisi = require('../../../models/disposisi')
const surat = require('../../../models/surat')
const bcrypt = require("bcrypt");
const controller = {};

const showLDD = async (req, res) => {
  try {
    // Fetch Disposisi records with limited attributes
    const disposisiData = await Disposisi.findAll({
      attributes: ['id', 'id_surat'] // Include only necessary attributes to avoid fetching unnecessary data
    });

    // Extract id_surat values from disposisiData
    const idSuratList = disposisiData.map(disposisi => disposisi.id_surat);

    // Fetch Surat records based on id_surat values
    const suratData = await surat.findAll({
      where: { id: idSuratList }, // Filter Surat records based on id_surat values
      attributes: ['id', 'nama_surat', 'lampiran'] // Specify the attributes you need from Surat
    });

    res.render("mahasiswa/disposisi/landingPageDisposisi", { suratData });
  } catch (error) {
    console.error("Error fetching surat data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const hapusSurat = async (req, res) => {
  try {
    const id = req.params.id_surat;
    const foundSurat = await Disposisi.findByPk(id);

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    // Hapus surat dari database
    await foundSurat.destroy();

    // Beri respons berhasil dihapus
    res.redirect('/mahasiswa/LDKelola');
  } catch (error) {
    console.error("Error saat menghapus surat:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus surat" });
  }
};


const hapusSuratDisposisi = async (req, res) => {
  try {
    const id_surat = req.params.id_surat; // Mengambil id_surat dari parameter URL
    const foundSurat = await Disposisi.findOne({ where: { id_surat: id_surat } });

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    // Hapus surat dari database
    await foundSurat.destroy();

    // Beri respons berhasil dihapus
    res.redirect('/mahasiswa/LDDisposisi');

  } catch (error) {
    console.error("Error saat menghapus surat:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus surat" });
  }
};



module.exports = {
  showLDD,
  hapusSurat,
  hapusSuratDisposisi
};