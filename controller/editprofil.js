const modeluser = require('../models/user')

const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}

const showEdit = async (req, res) => {
    try {
        res.render('editprofil')
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const editProfil = async (req, res) => {
    try {
        const id = 2
        const { nama, nomor_induk, alamat } = req.body;

        console.log(nama, nomor_induk, alamat);

        const result = await modeluser.update({
            name : nama,
            nomor_induk: nomor_induk,
            alamat:alamat
        }, {
            where: { id_user:id }
        });
        
        if (!result) {
            res.status(400).json({
                message: "data gagal di update",
               success: false
            });
        }
        return res.status(200).json({success: true, message: "data berhasil diupdate"})
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error });
    }
}

module.exports = {
    showEdit,
    editProfil
}
