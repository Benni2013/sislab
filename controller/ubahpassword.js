// controller/ubahpassword.js
const User = require('./../models/user');
const bcrypt = require('bcrypt');
const controller = {};

controller.formubahpassword = async (req, res) => {
    res.render('ubahpassword');
};

controller.ubahpassword = async (req, res) => {
    try {
        const id_user = req.user.id_user; // Mengambil id_user dari token yang sudah diverifikasi
        const { password, newpassword } = req.body;

        if (!password || !newpassword) {
            return res.status(400).json({
                success: false,
                message: 'Isi semua formnya'
            });
        }

        const findAkun = await User.findOne({ where: { id_user } });
        if (!findAkun) {
            return res.status(400).json({
                success: false,
                message: 'Data akun tidak ditemukan'
            });
        }

        const passwordAsli = findAkun.password;
        const passwordMatch = bcrypt.compareSync(password, passwordAsli);
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Password lama anda salah'
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const encryptPass = bcrypt.hashSync(newpassword, salt);
        await User.update({ password: encryptPass }, { where: { id_user } });
        return res.status(200).json({
            success: true,
            message: 'Akun anda berhasil diperbaharui'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = controller;
