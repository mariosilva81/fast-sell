const knex = require('../config/conexao_DB')

const usuarioPorEmailRepositorio = async (email) => {
  const usuariosEncontrados = await knex('usuarios').where({ email })
  return usuariosEncontrados[0]
}

const usuarioPorIdRepositorio = async (id) => {
  const usuarioEncontrado = await knex('usuarios')
    .where({ id })
    .select('id', 'nome', 'email')

  return usuarioEncontrado
}

const cadastrarUsuarioRepositorio = async (nome, email, senhaCriptografada) => {
  const usuarioCadastrado = await knex('usuarios')
    .insert({
      nome,
      email,
      senha: senhaCriptografada,
    })
    .returning('*')

  return usuarioCadastrado
}

const editarUsuarioRepositorio = async (camposParaEditar, id) => {
  return await knex('usuarios')
    .where({ id })
    .update(camposParaEditar)
    .returning(['id', 'nome', 'email'])
}

module.exports = {
  usuarioPorEmailRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
}
