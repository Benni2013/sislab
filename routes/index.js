const changePass = require('./changePass')
const editprofil = require('./editprofil')
const login = require('./login')
const lihatprofil = require ('./lihatprofil')
const admin = require('./adminRoute')
const server = {}

server.changePass = changePass
server.editprofil = editprofil
server.login = login
server.lihatprofil = lihatprofil
server.admin = admin


module.exports = server
