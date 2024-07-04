const modeluser = require('../../models/user')

const bcrypt = require('bcrypt')


const showEditAkun = async (req, res) => {
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

        const foundUser = await modeluser.findByPk(req.params.id);

        res.render('admin/dataUser/editAkun', { akun, foundUser })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showLihatAkun = async (req, res) => {
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

        const foundUser = await modeluser.findByPk(req.params.id);

        res.render('admin/dataUser/lihatAkun', { akun, foundUser })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showListAkun = async (req, res) => {
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

        const allUser = await modeluser.findAll()

        res.render('admin/dataUser/listAkun', { akun, allUser })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const showTambahAkun = async (req, res) => {
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

        res.render('admin/dataUser/tambahAkun', { akun })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error })
    }
}

const editAkun = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, nomor_induk, alamat, email, role, pass } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(pass, salt);

    const result = await modeluser.update({
        name : name,
        nomor_induk : nomor_induk,
        alamat : alamat,
        email : email,
        role : role,
        password : password,
        updated_at: new Date(),
    }, {
        where: { id_user:id }
    });

    if (!result) {
        res.status(400).json({
            message: "data gagal diupdate",
            success: false

        });
    }
    return res.redirect('/admin/data-akun/list-akun')

    
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error })
  }
}

const tambahAkun  = async (req, res) => {
  try {
    let { name, nomor_induk, alamat, email, role, pass } = req.body;

    if (!name || !nomor_induk || !email || !role || !pass) {
        return res.status(400).send('Semua bidang wajib diisi');
    }

    
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(pass, salt);

    const result = await modeluser.create({
        name,
        email,
        password,
        nomor_induk,
        alamat,
        role,
        created_at: new Date(),
        updated_at: new Date(),
    });

    if (!result) {
        res.status(400).json({
            message: "data gagal ditambahkan",
            success: false

        });
    }
    return res.redirect('/admin/data-akun/list-akun')

    
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error })
  }
}

const hapusAkun = async (req, res) => {
  try {
    const id = req.params.id;
    const foundUser = await modeluser.findByPk(id);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }


    await foundUser.destroy();


    res.redirect('/admin/data-akun/list-akun')

  } catch (error) {
    console.error("Error saat menghapus surat:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus surat" });
  }
};


module.exports = {
    showListAkun,
    showLihatAkun,
    showEditAkun,
    showTambahAkun,
    editAkun,
    tambahAkun,
    hapusAkun
}