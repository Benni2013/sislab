// controller/register.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const controller = {};

controller.showRegister = async (req, res) => {
    try {
        res.render('mahasiswa/register'); // Render halaman registrasi
    } catch (error) {
        console.error("Error rendering register page: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

controller.register = async (req, res) => {
    const { email, name, nomor_induk, password, confirmPassword, role } = req.body;

    // Validasi input
    if (!email || !name || !nomor_induk || !password || !confirmPassword || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        // Cek apakah email atau nomor_induk sudah terdaftar
        const existingUser = await User.findOne({ where: { [or]: [{ email }, { nomor_induk }] } });
        if (existingUser) {
            return res.status(400).json({ message: "Email or Nomor Induk already registered" });
        }

        // Enkripsi password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Simpan pengguna baru ke database
        const newUser = await User.create({
            email,
            name,
            nomor_induk,
            password: hashedPassword,
            role
        });

        // Buat token JWT
        const token = jwt.sign(
            { id_user: newUser.id_user, email: newUser.email, name: newUser.name, nomor_induk: newUser.nomor_induk, role: newUser.role },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: 86400 }
        );

        // Set cookie dengan token
        res.cookie("token", token, { httpOnly: true });

        // Redirect ke halaman sesuai dengan peran pengguna
        if (newUser.role === 'mahasiswa') {
            return res.redirect('/mahasiswa/dashboard');
        } else if (newUser.role === 'admin') {
            return res.redirect('/admin/dashboard');
        }

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = controller;
