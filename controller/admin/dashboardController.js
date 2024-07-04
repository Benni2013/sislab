const modeluser = require('../../models/user')
const disposisi = require('../../models/disposisi')
const surat = require('../../models/surat')



const showDashboard = async (req, res) => {
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

        const jmlUser = await modeluser.count()
        const jmlDisposis = await disposisi.count() 
        const jmlSM = await surat.count()
        const jmlSK = await surat.count()

        res.render('admin/dashboardAdmin', { akun, jmlUser, jmlDisposis , jmlSM, jmlSK })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}


module.exports = {
    showDashboard
}