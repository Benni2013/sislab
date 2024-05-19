const surat_masuk = require('./surat_masuk')
const user = require('./user')


user.hasMany(surat_masuk, {foreignKey: 'id_user'})
surat_masuk.belongsTo(user, {foreignKey: 'id_user'})
