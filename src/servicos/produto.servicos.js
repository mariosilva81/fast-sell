const { Erro } = require('../erros.js')
const {
  cadastrarProdutoRepositorio,
  detalharProdutoRepositorio,
  listarProdutoRepositorio,
  editarProdutoRepositorio,
  deletarProdutoRepositorio,
  verificarProdutoEmPedidoRepositorio,
} = require('../repositorios/index.js')
const { excluirImagem, enviarImagem } = require('../utilitarios/index.js')

const cadastrarProdutoServico = async (dadosProduto, arquivo) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = dadosProduto

  const produtoCadastrado = await cadastrarProdutoRepositorio(
    descricao,
    quantidade_estoque,
    valor,
    categoria_id
  )

  if (!arquivo) {
    return produtoCadastrado[0]
  }

  const path = `${
    produtoCadastrado[0].id
  }_${produtoCadastrado[0].descricao.replaceAll(' ', '_')}`
  const cadastrarImagem = await enviarImagem(
    path,
    arquivo.buffer,
    arquivo.mimetype
  )

  const produtoComImagem = await editarProdutoRepositorio(
    Number(produtoCadastrado[0].id),
    {
      produto_imagem: cadastrarImagem.path,
    }
  )
  const retornoProduto = {
    id: produtoComImagem[0].id,
    descricao: produtoComImagem[0].descricao,
    quantidade_estoque: produtoComImagem[0].quantidade_estoque,
    valor: produtoComImagem[0].valor,
    produto_imagem: produtoComImagem[0].produto_imagem,
    url_imagem: cadastrarImagem.url,
    categoria_id: produtoComImagem[0].categoria_id,
  }
  return retornoProduto
}

const detalharProdutoServico = async (produtoId) => {
  const produtoEncontrado = await detalharProdutoRepositorio(Number(produtoId))

  if (produtoEncontrado[0].produto_imagem) {
    produtoEncontrado[0].produto_imagem = `https://${process.env.BUCKET_NAME}.${process.env.ENDPOINT_BACKBLAZE}/${produtoEncontrado[0].produto_imagem}`
  }

  return produtoEncontrado[0]
}

const listarProdutoServico = async (categoria_id) => {
  const produtos = await listarProdutoRepositorio()
  if (typeof categoria_id === 'undefined') {
    return produtos
  }
  const produtosFiltrado = produtos.filter((produto) => {
    return Number(categoria_id) === produto.categoria_id
  })

  if (produtosFiltrado.length < 1) {
    throw new Erro('Nenhum produto encontrado com o filtro informado.', 404)
  }

  return produtosFiltrado
}

const editarProdutoServico = async (dadosProduto, produtoId, arquivo) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = dadosProduto

  const cadastrarImagem = async () => {
    if (arquivo) {
      const path = `${produtoId}_${descricao.replaceAll(' ', '_')}`

      return await enviarImagem(path, arquivo.buffer, arquivo.mimetype)
    }
  }

  const produtoEditado = await editarProdutoRepositorio(Number(produtoId), {
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
    produto_imagem: cadastrarImagem.path,
  })

  return produtoEditado[0]
}

const deletarProdutoServico = async (produtoId) => {
  if (isNaN(produtoId)) {
    throw new Erro('Deve ser informado um ID de produto válido.', 400)
  }

  const produtoEstaEmPedido = await verificarProdutoEmPedidoRepositorio(
    Number(produtoId)
  )

  if (produtoEstaEmPedido)
    throw new Erro(
      'Não é possível excluir o produto porque ele está vinculado a um pedido.',
      400
    )

  const produtoEncontrado = await detalharProdutoRepositorio(produtoId)

  if (produtoEncontrado)
    await excluirImagem(produtoEncontrado[0].produto_imagem)

  await deletarProdutoRepositorio(Number(produtoId))

  return { mensagem: 'Produto excluído com sucesso.' }
}

module.exports = {
  cadastrarProdutoServico,
  detalharProdutoServico,
  listarProdutoServico,
  editarProdutoServico,
  deletarProdutoServico,
}
