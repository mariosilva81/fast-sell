const verificaEmail = require('./verificaEmail')
const validarCorpoRequisicao = require('./validaCorpoRequisicao')
const verificaToken = require('./verificaToken')
const verificaLogin = require('./verificaLogin')
const verificaId = require('./verificaId')
const verificaDadosCliente = require('./verificaDadosCliente')
const verificaDadosPedido = require('./verificaDadosPedido')
const multer = require ('./multer')

module.exports = {
  verificaEmail,
  validarCorpoRequisicao,
  verificaToken,
  verificaLogin,
  verificaId,
  verificaDadosCliente,
  verificaDadosPedido,
  multer

}
