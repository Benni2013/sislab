const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/dbconfig.js');

var peminjamanTa = db.define('peminjamanta', {
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    no_hp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kegiatan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = peminjamanTa;
