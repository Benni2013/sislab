// const modeluser = require('../models/user')

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};

const editSurat = async (req, res) => {
  try {
    res.render("mahasiswa/kelola/editSurat");
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  editSurat
};