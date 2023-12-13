const jwt = require('jsonwebtoken')
const { usuarioPorEmailRepositorio } = require('../repositorios/index.js')

const loginServico = async (userData) => {
  const { email } = userData

  const usuario = await usuarioPorEmailRepositorio(email)

  const token = jwt.sign({ id: usuario.id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  })

  delete usuario.senha

  const usuarioLogado = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    token,
  }

  return usuarioLogado
}

module.exports = loginServico
