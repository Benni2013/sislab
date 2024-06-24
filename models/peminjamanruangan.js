const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/dbconfig.js');

const PeminjamanRuangan = db.define('peminjamanruangan', {
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
    tanggal_peminjaman: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    jam_mulai: {
        type: DataTypes.TIME,
        allowNull: false
    },
    jam_selesai: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = PeminjamanRuangan;
