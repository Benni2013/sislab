// const modeluser = require('../models/user')

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const surat = require('../../../models/surat')
const controller = {};

const lihatSurat = async (req, res) => {
  const id = req.params.id;

  try {
    // Cari surat berdasarkan id
    const foundSurat = await surat.findByPk(id);

    if (!foundSurat) {
      return res.status(404).json({ message: "Surat not found" });
    }

    // Render halaman detail surat dengan data surat yang ditemukan
    res.render("mahasiswa/kelola/lihatSurat", { surat: foundSurat });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  lihatSurat
};