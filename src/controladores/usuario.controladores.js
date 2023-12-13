const {
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
} = require('../servicos/index.js')

const cadastrarUsuarioControlador = async (req, res) => {
  const dadosUsuario = req.body
  const usuario = await cadastrarUsuarioServico(dadosUsuario)

  return res.status(201).json(usuario)
}

const detalharUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const usuarioEncontrado = await detalharUsuarioServico(usuarioId)

  return res.status(200).json(usuarioEncontrado)
}

const editarUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const usuarioEditado = await editarUsuarioServico(req.body, usuarioId)

  return res.status(200).json(usuarioEditado)
}

module.exports = {
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
}
