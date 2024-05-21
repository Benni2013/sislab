
const modeluser = require('../models/user')

const {
    or,
    where
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controller = {}

// Mendefinisikan data dummy untuk profil pengguna
const lihatProfil = async(req,res)=>{
  try {
    console.log("asdasdasd");
    const id = req.user.id_user
    console.log(id);
    const akun = await modeluser.findOne({
      where:{
        id_user: id
      }
    })
    console.log(akun);
    if (!akun) {
      return res.status(400).json({success: false, messsage:"akun not found"})
    }
    return res.render('lihatprofil', { akun })
  } catch (error) {
    console.error(error);
    return res.status(500).json({success: false,messsage:"asd", error})
  }
}

module.exports = {
  lihatProfil
};