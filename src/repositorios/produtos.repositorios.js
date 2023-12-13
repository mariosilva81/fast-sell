const knex = require('../config/conexao_DB')

const cadastrarProdutoRepositorio = async (
  descricao,
  quantidade_estoque,
  valor,
  categoria_id
) => {
  const produtoCadastrado = await knex('produtos')
    .insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    })
    .returning('*')

  return produtoCadastrado
}
const detalharProdutoRepositorio = async (id) => {
  return await knex('produtos').where({ id })
}

const listarProdutoRepositorio = async () => {
  return await knex('produtos')
}

const editarProdutoRepositorio = async (id, camposParaEditar) => {

  return await knex('produtos')
    .where({ id })
    .update(camposParaEditar)
    .returning('*')
}

const deletarProdutoRepositorio = async (id) => {
  return await knex('produtos').where({ id }).delete().returning('*')
}

const verificarProdutoEmPedidoRepositorio = async (produtoId) => {
  const existePedido = await knex('pedido_produtos')
    .where('produto_id', produtoId)
    .select('id')
    .first();

  return !!existePedido;
}

module.exports = {
  cadastrarProdutoRepositorio,
  detalharProdutoRepositorio,
  listarProdutoRepositorio,
  editarProdutoRepositorio,
  deletarProdutoRepositorio,
  verificarProdutoEmPedidoRepositorio
}
