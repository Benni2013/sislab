const modeluser = require('../models/user')
// const { now } = require('sequelize/types/utils');
const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const controller = {}

const ubahpassword=async (req,res)=>{
    const id_admin = req.session.id_admin
    const findAkun = await modelAdmin.findByPk(id_admin)
    if (!findAkun) {
        return res.status(400).json({
            success: false,
            message: 'Data akun tidak ditemukan'
        })
    }
    const {
        username,
        nama,
        email,
        passwordLama,
        passwordBaru
    } = req.body
}