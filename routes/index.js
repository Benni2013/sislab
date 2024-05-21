const changePass = require('./changePass')
const editprofil = require('./editprofil')
const login = require('./login')
const lihatprofil = require ('./lihatprofil')
const server = {}

server.changePass = changePass
server.editprofil = editprofil
server.login = login
server.lihatprofil = lihatprofil

module.exports = server
