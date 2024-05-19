const modeluser = require('../models/user')

const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}

const showEdit = async (req,res) =>{
    try {
        res.render('editprofil')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({message: error})
    }
}

module.exports = {
    showEdit
}

