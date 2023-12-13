const express = require('express')
const usuarioRota = express.Router()
const { usuarioEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaEmail,
  verificaToken,
  verificaId,
} = require('../intermediarios/index.js')
const {
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
} = require('../controladores/index.js')

usuarioRota.post(
  '/',
  validarCorpoRequisicao(usuarioEsquema),
  verificaEmail,
  cadastrarUsuarioControlador
)
usuarioRota.get('/', verificaToken, verificaId, detalharUsuarioControlador)
usuarioRota.put(
  '/',
  verificaToken,
  validarCorpoRequisicao(usuarioEsquema),
  verificaEmail,
  editarUsuarioControlador
)

module.exports = usuarioRota
