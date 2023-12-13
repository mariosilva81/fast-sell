const { Erro } = require('../erros')
const knex = require('../config/conexao_DB')
const bcrypt = require('bcrypt')

const verificaLogin = async (req, res, next) => {
  const { email, senha } = req.body

  const usuario = await knex('usuarios').where({ email }).first()

  if (!usuario) throw new Erro('Email e/ou senha incorretos.', 401)

  const senhaCriptografada = usuario.senha
  const validarSenha = await bcrypt.compare(senha, senhaCriptografada)

  if (!validarSenha) throw new Erro('Email e/ou senha incorretos.', 401)

  return next()
}

module.exports = verificaLogin
