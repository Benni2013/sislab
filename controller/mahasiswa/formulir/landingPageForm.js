const { PeminjamanRuangan, PeminjamanTa, User } = require('../../../models/association');

const showLDF = async (req, res) => {
  try {
    const peminjamanRuangan = await PeminjamanRuangan.findAll({
      include: [{
        model: User,
        attributes: ['id_user', 'name', 'email'] 
      }]
    });

    const peminjamanTa = await PeminjamanTa.findAll({
      include: [{
        model: User,
        attributes: ['id_user', 'name', 'email'] 
      }]
    });

    res.render("mahasiswa/formulir/landingPageForm", { peminjamanRuangan, peminjamanTa });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  showLDF
};
