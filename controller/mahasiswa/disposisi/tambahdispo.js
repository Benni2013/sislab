// const modeluser = require('../models/user')

const { or, where } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};
const user = require('../../../models/user')
const Disposisi = require('../../../models/disposisi')

const addDispo = async (req, res) => {
  try {
    res.render("mahasiswa/disposisi/tambahDispo");
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};



module.exports = {
    addDispo
};