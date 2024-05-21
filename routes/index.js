const changePass = require('./changePass')
const editprofil = require('./editprofil')
const login = require('./login')
const server = {}

server.changePass = changePass
server.editprofil = editprofil
server.login = login

module.exports = server
