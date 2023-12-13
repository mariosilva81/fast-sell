const knex = require('../config/conexao_DB')

const cadastrarPedidoRepositorio = async (
  cliente_id,
  observacao,
  valor_total
) => {
  const pedidoCadastrado = await knex('pedidos')
    .insert({ cliente_id, observacao, valor_total })
    .returning('*')
  return pedidoCadastrado
}

const cadastrarProdutoPedidoRepositorio = async (produto) => {
  const produtoPedidoCadastrado = await knex('pedido_produtos').insert(produto)

  return produtoPedidoCadastrado
}

const listarPedidosRepositorio = async () => {
    return await knex('pedidos')
}

const filtrarPedidoRepositorio = async (id) => {
  return await knex('pedidos').where(id)
}

const filtrarProdutoPedidoRepositorio = async (pedido_id) => {
    return await knex('pedido_produtos').where(pedido_id)
}

module.exports = {
  cadastrarPedidoRepositorio,
  cadastrarProdutoPedidoRepositorio,
  listarPedidosRepositorio,
  filtrarPedidoRepositorio,
  filtrarProdutoPedidoRepositorio
}
