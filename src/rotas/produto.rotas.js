const express = require('express')
const produtoRota = express.Router()
const { produtoEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
} = require('../intermediarios/index.js')

const multer = require('../intermediarios/multer.js')

const {
  cadastrarProdutoControlador,
  detalharProdutoControlador,
  listarProdutoControlador,
  editarProdutoControlador,
  deletarProdutoControlador,
} = require('../controladores/index.js')

produtoRota.post(
  '/',
  verificaToken,
  multer.single('arquivo'),
  validarCorpoRequisicao(produtoEsquema),
  verificaId,
  cadastrarProdutoControlador
)
produtoRota.get('/', verificaToken, listarProdutoControlador)
produtoRota.get('/:id', verificaToken, verificaId, detalharProdutoControlador)
produtoRota.put(
  '/:id',
  verificaToken,
  multer.single('arquivo'),
  validarCorpoRequisicao(produtoEsquema),
  verificaId,
  editarProdutoControlador
)
produtoRota.delete('/:id', verificaToken, verificaId, deletarProdutoControlador)

module.exports = produtoRota
