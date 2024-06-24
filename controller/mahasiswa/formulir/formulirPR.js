
const modeluser = require('../../../models/user')
const peminjamanruangan= require('../../../models/peminjamanRuangan')
const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};

const showPR = async (req, res) => {
  try {
    const userId = req.user.id_user;

    const user = await modeluser.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.render("mahasiswa/formulir/formulirPR", { user });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

const saveFormulirPR = async (req, res) => {
  try {
    const { id_user, kegiatan, no_hp, tanggal_peminjaman, jam_mulai, jam_selesai } = req.body;
    await peminjamanruangan.create({
      id_user,
      kegiatan,
      no_hp,
      tanggal_peminjaman,
      jam_mulai,
      jam_selesai
    });
    res.redirect('/mahasiswa/LDForm')
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  showPR,
  saveFormulirPR
};