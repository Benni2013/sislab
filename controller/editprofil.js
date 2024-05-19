const modeluser = require('../models/user')

const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}

const showEdit = async (req,res) =>{
    res.render('editprofil')
}

module.exports = {
    showEdit
}

