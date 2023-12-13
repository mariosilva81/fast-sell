const express = require('express')
const pedidoRota = express.Router()
const {
  verificaDadosPedido,
  verificaToken,
  validarCorpoRequisicao,
} = require('../intermediarios/index.js')
const {
  cadastrarPedidoControlador,
  listarPedidoControlador,
} = require('../controladores/index.js')
const { pedidoEsquema } = require('../esquemas/index.js')

pedidoRota.post(
  '/',
  verificaToken,
  validarCorpoRequisicao(pedidoEsquema),
  verificaDadosPedido,
  cadastrarPedidoControlador
)

pedidoRota.get('/', verificaToken, listarPedidoControlador)
module.exports = pedidoRota
