const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/dbconfig.js');

const Disposisi = db.define('disposisi', {
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_penerima: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_surat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    intruksi: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Disposisi;
