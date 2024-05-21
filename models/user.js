
const {sequelize, DataTypes, err} = require('sequelize')
const db = require('../config/dbconfig.js')

var user = db.define('user',{
    id_user : {
        type        : DataTypes.INTEGER,
        allowNull   : false,
        primaryKey  : true,
        autoIncrement: true
    },
    name : {
        type        : DataTypes.STRING,
        allowNull   : false
    },
    email : {
        type        : DataTypes.STRING,
        allowNull   : false
    },
    password :{
        type        : DataTypes.STRING,
        allowNull   : false
    },
    ttd :{
        type        : DataTypes.STRING,
        allowNull   : false
    },
    nomor_induk :{
        type        : DataTypes.STRING,
        allowNull   : false
    },
    alamat :{
        type        : DataTypes.STRING,
        allowNull   : false
    },
    role :{
        type        :DataTypes.STRING,
        allowNull   :false
    },
    created_at : {
        type        : DataTypes.DATEONLY,
        allowNull   : false
    },
    updated_at : {
        type        : DataTypes.DATEONLY,
        allowNull   : false
    }
}, {
    freezeTableName : true,
    timestamps  : true,
    createdAt:'created_at',
    updatedAt: 'updated_at'
})

// user.hasMany(signature);
module.exports = user