require('dotenv').config()
const express = require('express')
require('express-async-errors')
const cors = require('cors')

const { manipuladorDeErro } = require('./erros')
const { categoriaRota, usuarioRota, loginRota, clienteRota, produtoRota, pedidoRota} = require('./rotas/index.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/categoria', categoriaRota)
app.use('/usuario', usuarioRota)
app.use('/login', loginRota)
app.use('/cliente', clienteRota)
app.use('/produto', produtoRota)
app.use('/pedido', pedidoRota)

app.use(manipuladorDeErro)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`)
})
