const knex = require('../config/conexao_DB')

const cadastrarClienteRepositorio = async (dadosCliente) => {
  const clienteCadastrado = await knex('clientes')
    .insert(dadosCliente)
    .returning('*')

  return clienteCadastrado
}

const detalharClienteRepositorio = async (id) => {
  const clienteEncontrado = await knex('clientes')
    .where({ id })
    .select(
      'id',
      'nome',
      'email',
      'cpf',
      'cep',
      'rua',
      'numero',
      'bairro',
      'cidade',
      'estado'
    )

  return clienteEncontrado
}

const filtrarClienteRepositorio = async (filtro) => {
  const clienteEncontrado = await knex('clientes').where(filtro)

  return clienteEncontrado[0]
}

const editarClienteRepositorio = async (camposParaEditar, id) => {
  const clienteEditado = await knex('clientes')
    .where(id)
    .update(camposParaEditar)
    .returning([
      'nome',
      'email',
      'cpf',
      'cep',
      'rua',
      'numero',
      'bairro',
      'cidade',
      'estado',
    ])

  return clienteEditado[0]
}

const listarClientesRepositorio = async () => {
  return await knex('clientes')
}

module.exports = {
  cadastrarClienteRepositorio,
  editarClienteRepositorio,
  detalharClienteRepositorio,
  listarClientesRepositorio,
  filtrarClienteRepositorio,
}
