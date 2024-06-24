// controller/login.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const controller = {};

controller.showLoginMhs = async (req, res) => {
  try {
    res.render('mahasiswa/LoginMahasiswa');
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};

controller.showLoginOffice = async (req, res) => {
  try {
    res.render('office/LoginOffice');
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};

controller.showLupaPassword = async (req, res) => {
  try {
    res.render('lupaPassword');
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};

controller.checklogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ where: { nomor_induk: username } });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, foundUser.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { 
        id_user: foundUser.id_user, 
        email: foundUser.email, 
        name: foundUser.name, 
        nomor_induk: foundUser.nomor_induk, 
        role: foundUser.role 
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: 86400 }
    );

    res.cookie("token", token, { httpOnly: true });

    if (foundUser.role === 'mahasiswa') {
      return res.redirect('/lihatprofil');
    } else if (foundUser.role === "admin") {
      return res.redirect('/admin/dashboard');
    }

    res.status(200).send({ auth: true, token: token });
  } catch (err) {
    console.error("Error during login: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

controller.lupaPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmNewPassword } = req.body;
    // algoritma ganti password jika lupa password
    return res.redirect('/'); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

module.exports = controller;
