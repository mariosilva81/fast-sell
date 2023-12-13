const express = require('express')
const clienteRota = express.Router()
const { clienteEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaDadosCliente,
  verificaToken,
  verificaId,
} = require('../intermediarios/index.js')

const {
  cadastrarClienteControlador,
  editarClienteControlador,
  listarClientesControlador,
  detalharClienteControlador,
} = require('../controladores/index.js')

clienteRota.post(
  '/',
  verificaToken,
  validarCorpoRequisicao(clienteEsquema),
  verificaDadosCliente,
  cadastrarClienteControlador
)

clienteRota.get('/', verificaToken, listarClientesControlador)
clienteRota.get('/:id', verificaToken, verificaId, detalharClienteControlador)
clienteRota.put(
  '/:id',
  verificaToken,
  verificaId,
  validarCorpoRequisicao(clienteEsquema),
  verificaDadosCliente,
  editarClienteControlador
)

module.exports = clienteRota
