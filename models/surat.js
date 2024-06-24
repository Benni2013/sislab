const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/dbconfig.js');

const surat = db.define('surat', {
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_penerima: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama_surat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lampiran: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = surat;
