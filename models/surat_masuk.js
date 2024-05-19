
const {sequelize, DataTypes, err} = require('sequelize')
const db = require('../config/dbconfig.js')

var surat_masuk = db.define('surat_masuk',{
    no_surat_masuk : {
        type        : DataTypes.varchar,
        allowNull   : false,
        primaryKey  : true,
        autoIncrement: false
    },
    id_user : {
        type        : DataTypes.INTEGER,
        allowNull   : false
    },
    nama_surat_masuk : {
        type        : DataTypes.varchar,
        allowNull   : false
    },
    file_surat_masuk :{
        type        : DataTypes.varchar,
        allowNull   : false
    },
    created_at :{
        type        :DataTypes.DATEONLY,
        allowNull   :false
    },
    updated_at : {
        type        : DataTypes.DATEONLY,
        allowNull   : false
    },

}, {
    freezeTableName : true,
    timestamps  : true,
    createdAt:'created_at',
    updatedAt: 'updated_at'
})

// user.hasMany(signature);
module.exports = user