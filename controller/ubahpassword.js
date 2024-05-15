const modeluser = require('../models/user')
// const { now } = require('sequelize/types/utils');
const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}

const ubahpassword = async (req, res) => {
    try {
        const id_admin = 1
        const {
            password,
            newpassword
        } = req.body

        if (!password || !newpassword) {
            return res.status(400).json({
                success: false,
                message: 'isi semua formnya'
            })
        }
        const findAkun = await modeluser.findOne({
            where: {
                id: id_admin
            }
        })
        if (!findAkun) {
            return res.status(400).json({
                success: false,
                message: 'Data akun tidak ditemukan'
            })
        }
    
        const passwordAsli = findAkun.password
        const passwordMatch = bcrypt.compareSync(password, passwordAsli)
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Password lama anda salah'
            })
        }
    
        const salt = bcrypt.genSaltSync(10)
        const encryptPass = bcrypt.hashSync(newpassword, salt)
        await modeluser.update({
          password: encryptPass
        }, {
            where: {
                id: id_admin
            }
        })
        return res.status(200).json({
            success: true,
            message: 'Akun anda berhasil diperbaharui'
        })
    } catch (error) {
        console.error(error);
       return res.status(500).json({ success: false,
        message: error})
    }



}

module.exports = {
    ubahpassword
}