const { Erro } = require('../erros.js')
const {
  detalharProdutoRepositorio,
  cadastrarPedidoRepositorio,
  cadastrarProdutoPedidoRepositorio,
  filtrarClienteRepositorio,
  editarProdutoRepositorio,
  filtrarPedidoRepositorio,
  filtrarProdutoPedidoRepositorio,
  listarPedidosRepositorio,
} = require('../repositorios/index.js')
const { enviarEmailConfirmacao } = require('../utilitarios/index.js')

const cadastrarPedidoServico = async (dadosPedido) => {
  const { cliente_id, observacao, pedido_produtos } = dadosPedido

  const dadosProdutos = []
  let valor_total = 0

  for (const produto of pedido_produtos) {
    const produtoEncontrado = await detalharProdutoRepositorio(
      produto.produto_id
    )
    const { id, valor, quantidade_estoque } = produtoEncontrado[0]

    dadosProdutos.push({
      produto_id: id,
      descricao: produtoEncontrado[0].descricao,
      quantidade_produto: produto.quantidade_produto,
      valor_produto: valor,
    })

    valor_total += valor * produto.quantidade_produto

    const estoqueProduto = quantidade_estoque - produto.quantidade_produto
    if (estoqueProduto <= 0) {
      throw new Erro(
        `Estoque do produto: ${produtoEncontrado[0].descricao} insuficiente.`,
        404
      )
    }
    await editarProdutoRepositorio(id, { quantidade_estoque: estoqueProduto })
  }

  const pedidoCadastrado = await cadastrarPedidoRepositorio(
    cliente_id,
    observacao || null,
    valor_total
  )

  const pedido_id = pedidoCadastrado[0].id
  for (const produto of dadosProdutos) {
    const { produto_id, quantidade_produto, valor_produto } = produto
    await cadastrarProdutoPedidoRepositorio({
      pedido_id,
      produto_id,
      quantidade_produto,
      valor_produto,
    })
  }

  const clienteEncontrado = await filtrarClienteRepositorio({ id: cliente_id })
  const { nome: nomeCliente, email: emailCliente } = clienteEncontrado

  await enviarEmailConfirmacao(
    nomeCliente,
    pedido_id,
    emailCliente,
    dadosProdutos
  )

  return pedidoCadastrado[0]
}

const listarPedidoServico = async (cliente_id) => {
  const listaPedidos = []

  let pedidos
  if (
    Number(cliente_id) === 0 ||
    (isNaN(Number(cliente_id)) && cliente_id !== undefined)
  ) {
    throw new Erro('Informe um id de cliente válido', 400)
  }

  if (cliente_id) {
    pedidos = await filtrarPedidoRepositorio({ cliente_id })

    if (pedidos.length < 1) {
      throw new Erro(
        'Nenhum pedido encontrado com o id de cliente informado',
        400
      )
    }
  } else {
    pedidos = await listarPedidosRepositorio()
  }

  for (const pedido of pedidos) {
    const listaProdutos = []
    const produtos = await filtrarProdutoPedidoRepositorio({
      pedido_id: pedido.id,
    })
    for (const produtosPedido of produtos) {
      if (Array.isArray(produtosPedido)) {
        listaProdutos.push(...produtosPedido)
      } else {
        listaProdutos.push(produtosPedido)
      }
    }
    const pedidoDetalhado = {
      pedido: {
        id: pedido.id,
        valor_total: pedido.valor_total,
        observacao: pedido.observacao,
        cliente_id: pedido.cliente_id,
      },
      pedido_produtos: listaProdutos,
    }
    listaPedidos.push(pedidoDetalhado)
  }

  return listaPedidos
}

module.exports = {
  cadastrarPedidoServico,
  listarPedidoServico,
}
