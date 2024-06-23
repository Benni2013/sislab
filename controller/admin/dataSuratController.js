// const modeluser = require('../../models/user')
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
        res.render('admin/dataSurat/listSuratMasuk')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showSuratKeluar = async (req, res) => {
    try {
        res.render('admin/dataSurat/listSuratKeluar')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLihatSurat = async (req, res) => {
    try {
        res.render('admin/dataSurat/lihatSurat')
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