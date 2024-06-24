const modeluser = require('../../models/user')
const surat = require('../../models/surat')
require('dotenv').config()
const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}
const jwt = require('jsonwebtoken');


const showSuratMasuk = async (req, res) => {
    try {
        // panggil data akun
        const id = req.user.id_user

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }

        const allSurat = await surat.findAll()

        res.render('admin/dataSurat/listSuratMasuk', { akun, allSurat })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showSuratKeluar = async (req, res) => {
    try {
        // panggil data akun
        const id = req.user.id_user

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }

        const allSurat = await surat.findAll()

        res.render('admin/dataSurat/listSuratKeluar', { akun, allSurat })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLihatSurat = async (req, res) => {
    try {
        // panggil data akun
        const id = req.user.id_user

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }
        
        res.render('admin/dataSurat/lihatSurat', { akun })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}


module.exports = {
    showSuratMasuk,
    showSuratKeluar,
    showLihatSurat
}