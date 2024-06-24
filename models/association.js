const PeminjamanRuangan = require('./peminjamanRuangan');
const PeminjamanTa = require('./peminjamanTa');
const surat = require('./surat');
const User = require('./user');
const Disposisi = require('./user');

User.hasMany(PeminjamanRuangan, { foreignKey: 'id_user' });
PeminjamanRuangan.belongsTo(User, { foreignKey: 'id_user' });

User.hasMany(PeminjamanTa, { foreignKey: 'id_user' });
PeminjamanTa.belongsTo(User, { foreignKey: 'id_user' });

User.hasMany(surat, { foreignKey: 'id_user' });
surat.belongsTo(User, { foreignKey: 'id_user' });

User.hasMany(surat, { foreignKey: 'id_user' });
surat.belongsTo(User, { foreignKey: 'id_penerima' });

User.hasMany(Disposisi, { foreignKey: 'id_user' });
Disposisi.belongsTo(User, { foreignKey: 'id_user' });

surat.hasMany(Disposisi, { foreignKey: 'id_surat' });
Disposisi.belongsTo(surat, { foreignKey: 'id_surat', as: 'surat' });

User.hasMany(Disposisi, { foreignKey: 'id_penerima' });
Disposisi.belongsTo(User, { foreignKey: 'id_penerima' });

module.exports = {
  User,
  PeminjamanRuangan,
  PeminjamanTa,
  surat,
  Disposisi
};
