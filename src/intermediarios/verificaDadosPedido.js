const { Erro } = require('../erros.js')
const {
  detalharClienteRepositorio,
  detalharProdutoRepositorio,
} = require('../repositorios/index.js')

const verificaDadosPedido = async (req, res, next) => {
  const { cliente_id: id, pedido_produtos } = req.body

  if (id) {
    const clienteEncontrado = await detalharClienteRepositorio(id)

    if (clienteEncontrado.length < 1)
      throw new Erro('Cliente não encontrado!', 404)
  }

  if (pedido_produtos.length < 1) {
    throw new Erro(
      'Lista de produtos vazia, ao menos um produto precisa ser informado.',
      404
    )
  }

  const listarProdutos = pedido_produtos.map(async (item) => {
    const id = item.produto_id
    const produtoEncontrado = await detalharProdutoRepositorio(id)

    if (produtoEncontrado.length < 1) {
      throw new Erro('Produto não encontrado!', 404)
    }

    if (produtoEncontrado[0].quantidade_estoque < item.quantidade_produto) {
      throw new Erro(
        `Estoque do produto: ${produtoEncontrado[0].descricao} insuficiente.`,
        404
      )
    }

    return produtoEncontrado
  })

  await Promise.all(listarProdutos)

  return next()
}

module.exports = verificaDadosPedido
