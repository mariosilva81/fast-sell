const bcrypt = require('bcrypt')
const {
  cadastrarUsuarioRepositorio,
  usuarioPorIdRepositorio,
  editarUsuarioRepositorio,
} = require('../repositorios/index.js')

const cadastrarUsuarioServico = async (dadosUsuario) => {
  const { nome, email, senha } = dadosUsuario

  const senhaCriptografada = await bcrypt.hash(senha, 10)

  const usuarioCadastrado = await cadastrarUsuarioRepositorio(
    nome,
    email,
    senhaCriptografada
  )

  const usuarioSemSenha = { id: usuarioCadastrado[0].id, nome, email }

  return usuarioSemSenha
}

const detalharUsuarioServico = async (id) => {
  const usuarioId = Number(id)
  const usuarioEncontrado = await usuarioPorIdRepositorio(usuarioId)

  delete usuarioEncontrado.senha

  return usuarioEncontrado[0]
}

const editarUsuarioServico = async (dadosUsuario, usuarioDecodificado) => {
  const { nome, email, senha } = dadosUsuario
  const usuarioId = Number(usuarioDecodificado)

  const senhaCriptografada = await bcrypt.hash(senha, 10)

  const usuarioNoBanco = await usuarioPorIdRepositorio(usuarioId)

  if (usuarioNoBanco[0].email === email) {
    const usuarioEditado = await editarUsuarioRepositorio(
      { nome, senha: senhaCriptografada },
      usuarioId
    )

    delete usuarioEditado.senha

    return usuarioEditado[0]
  } else {
    const usuarioEditado = await editarUsuarioRepositorio(
      { nome, email, senha: senhaCriptografada },
      usuarioId
    )

    delete usuarioEditado.senha

    return usuarioEditado[0]
  }
}

module.exports = {
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
}
