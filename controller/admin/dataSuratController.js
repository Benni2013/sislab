const modeluser = require('../../models/user')
const surat = require('../../models/surat')



const showSuratMasuk = async (req, res) => {
    try {

        const id = req.user.id_user

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }

        const allSurat = await surat.findAll()

        res.render('admin/dataSurat/listSuratMasuk', { akun, allSurat })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showSuratKeluar = async (req, res) => {
    try {

        const id = req.user.id_user

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }

        const allSurat = await surat.findAll()

        res.render('admin/dataSurat/listSuratKeluar', { akun, allSurat })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLihatSurat = async (req, res) => {
    try {

        const id = req.user.id_user
        const id_surat = req.params.id_surat

        const akun = await modeluser.findOne({
          where:{
            id_user: id
          }
        })

        if (!akun) {
          return res.status(400).json({success: false, messsage:"akun not found"})
        }

        const foundSurat = await surat.findByPk(id_surat)

        if (!foundSurat) {
          return res.status(404).json({ message: "Surat not found" });
        }
        
        res.render('admin/dataSurat/lihatSurat', { akun, foundSurat })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}


module.exports = {
    showSuratMasuk,
    showSuratKeluar,
    showLihatSurat
}