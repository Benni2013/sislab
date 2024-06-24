const modeluser = require('../../models/user')
const disposisi = require('../../models/disposisi')
const surat = require('../../models/surat')
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
        // panggil data akun
        const id = req.user.id_user

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }

        const jmlUser = 0 + await modeluser.count() // jml pengguna
        const jmlDisposis = 0 + await disposisi.count() // jml disposisi
        const jmlSM = 0 + await surat.count() // jml surat
        const jmlSK = 0 + await surat.count() // jml surat

        res.render('admin/dashboardAdmin', { akun, jmlUser, jmlDisposis , jmlSM, jmlSK })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}


module.exports = {
    showDashboard
}