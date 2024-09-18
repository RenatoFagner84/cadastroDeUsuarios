const express = require('express')
const { cadastrarUsuario, listarUsuario } = require('./controladores/cadastrarUsuario')
const validarCorpoRequisicao = require('./intermediario/validarCorpoRequisição')
const { schemaUsuario } = require('./schema/schemaUsuarios')

const rotas = express()

rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario)
rotas.get('/usuarios', listarUsuario)

module.exports = rotas

