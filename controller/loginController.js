const modeluser = require('../models/user')

const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}
const jwt = require('jsonwebtoken');

const showLoginMhs = async (req, res) => {
    try {
        res.render('mahasiswa/LoginMahasiswa')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLoginOffice = async (req, res) => {
    try {
        res.render('office/LoginOffice')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLupaPassword = async (req, res) => {
    try {
        res.render('lupaPassword')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const checklogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Menggunakan nama variabel lain untuk menyimpan hasil pencarian user
    const foundUser = await modeluser.findOne({ where: { username } });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verifikasi password
    const isValidPassword = await bcrypt.compare(password, foundUser.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Buat token JWT
    const token = jwt.sign(
      { 
        id: foundUser.id_user, 
        email: foundUser.email, 
        name: foundUser.name, 
        nomor_induk: foundUser.username, 
        role: foundUser.role 
        },
      process.env.JWT_SECRET_TOKEN || 'token_kunci',
      { expiresIn: 86400 }
    );

    // Set cookie dengan token
    res.cookie("token", token, { httpOnly: true });

    // Redirect ke halaman sesuai dengan peran pengguna
    if (foundUser.role === 0) {
      return res.redirect("/index.hbs");
    } else if (foundUser.role === "admin") {
      return res.redirect("/admin/dashboard");
    }
    console.log(foundUser.role)
    // Jika tidak ada peran yang cocok, berikan respons standar
    res.status(200).send({ auth: true, token: token });

  } catch (err) {
    console.error("Error during login: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const lupaPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmNewPassword } = req.body;

    

    return res.redirect('/login');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

module.exports = {
    showLoginMhs,
    showLoginOffice,
    showLupaPassword,
    checklogin,
    lupaPassword
}