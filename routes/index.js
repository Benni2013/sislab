const changePass = require('./changePass')
const editprofil = require('./editprofil')
const login = require('./login')
const register = require('./register')
const lihatprofil = require ('./lihatprofil')

// formulir mahasiswa
const LDF = require('./mahasiswa/formulir/landingPageForm')
const FTA = require('./mahasiswa/formulir/formulirTA')
const FPR = require('./mahasiswa/formulir/formulirPR')

// disposisi mahasiswa
const LDD = require('./mahasiswa/disposisi/landingPageDisposisi')
const editDispo = require('./mahasiswa/disposisi/editDispo')
const addDispo = require('./mahasiswa/disposisi/tambahdispo')

// kelola mahasiswa
const showSrt = require('./mahasiswa/kelola/lihatSurat')
const LDK = require('./mahasiswa/kelola/landingPageKel')
const editSurat = require('./mahasiswa/kelola/editSurat')
const addSurat = require('./mahasiswa/kelola/tambahSurat')

const admin = require('./admin/adminRoute')
const server = {}

server.changePass = changePass
server.editprofil = editprofil
server.login = login
server.register = register
server.lihatprofil = lihatprofil

// formulir mahasiswa
server.LDF = LDF
server.FTA = FTA
server.FPR = FPR
// disposisi mahasiswa
server.LDD = LDD
server.editDispo = editDispo
server.addDispo = addDispo
// kelola mahasiswa 
server.showSrt = showSrt
server.LDK = LDK
server.editSurat = editSurat
server.addSurat = addSurat

server.admin = admin



module.exports = server
