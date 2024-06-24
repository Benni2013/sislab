// const modeluser = require('../models/user')
const { PeminjamanRuangan, PeminjamanTa, User, surat } = require('../../../models/association');

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};

const showLDK = async (req, res) => {
  try {
    const surats = await surat.findAll();
    const userId = req.user.id_user;

    // Find the first user with the role 'asisten'
    const asisten = await User.findOne({ where: { role: 'asisten' } });

    if (!asisten) {
      return res.status(404).json({ message: "Asisten not found" });
    }

    const penerimaId = asisten.id_user; // Adjust this according to your user model's primary key

    res.render("mahasiswa/kelola/landingPageKelola", { surats, userId, penerimaId });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  showLDK
};