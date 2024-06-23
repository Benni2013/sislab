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

const showEditAkun = async (req, res) => {
    try {
        res.render('admin/dataUser/editAkun')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLihatAkun = async (req, res) => {
    try {
        res.render('admin/dataUser/lihatAkun')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showListAkun = async (req, res) => {
    try {
        res.render('admin/dataUser/listAkun')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showTambahAkun = async (req, res) => {
    try {
        res.render('admin/dataUser/tambahAkun')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}



module.exports = {
    showListAkun,
    showLihatAkun,
    showEditAkun,
    showTambahAkun
}