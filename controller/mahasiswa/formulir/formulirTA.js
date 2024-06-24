// const modeluser = require('../models/user')
const modeluser = require('../../../models/user')
const peminjamanta = require('../../../models/peminjamanTa')
const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}

const showFTA = async (req, res) => {
  try {
    const userId = req.user.id_user;

    const user = await modeluser.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.render("mahasiswa/formulir/formulirTA", { user });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

const saveFormulirTA = async (req, res) => {
  try {
    const { id_user, kegiatan, no_hp, start_date, end_date } = req.body;
    await peminjamanta.create({
      id_user,
      kegiatan,
      no_hp,
      start_date,
      end_date
    });
    res.redirect('/mahasiswa/LDForm')
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
   showFTA,
   saveFormulirTA
}