const {
  cadastrarClienteServico,
  detalharClienteServico,
  editarClienteServico,
  listarClientesServico,
} = require('../servicos/index.js')

const cadastrarClienteControlador = async (req, res) => {
  const dadosCliente = req.body
  const cliente = await cadastrarClienteServico(dadosCliente)

  return res.status(201).json(cliente)
}

const detalharClienteControlador = async (req, res) => {
  const { id } = req.params
  const clienteEncontrado = await detalharClienteServico(id)

  return res.status(200).json(clienteEncontrado)
}

const editarClienteControlador = async (req, res) => {
  const { id } = req.params
  const dadosCliente = req.body
  const clienteEditado = await editarClienteServico(dadosCliente, id)

  return res.status(200).json(clienteEditado)
}

const listarClientesControlador = async (req, res) => {
  const clienteListado = await listarClientesServico()

  return res.status(200).json(clienteListado)
}

module.exports = {
  cadastrarClienteControlador,
  detalharClienteControlador,
  editarClienteControlador,
  listarClientesControlador,
}
