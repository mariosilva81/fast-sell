const express = require('express')
const categoriaRota = express.Router()
const { listarCategoriasControlador } = require('../controladores')

categoriaRota.get('/', listarCategoriasControlador)

module.exports = categoriaRota
