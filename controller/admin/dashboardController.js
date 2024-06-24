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


const showDashboard = async (req, res) => {
    try {
        res.render('admin/dashboardAdmin')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}


module.exports = {
    showDashboard
}