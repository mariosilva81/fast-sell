const {
  cadastrarProdutoServico,
  detalharProdutoServico,
  listarProdutoServico,
  editarProdutoServico,
  deletarProdutoServico,
} = require('../servicos/index.js')

const cadastrarProdutoControlador = async (req, res) => {
  const dadosProduto = req.body

  const produto = await cadastrarProdutoServico(dadosProduto, req.file)

  return res.status(201).json(produto)
}

const detalharProdutoControlador = async (req, res) => {
  const { id: produtoId } = req.params
  const produtoEncontrado = await detalharProdutoServico(produtoId)

  return res.status(200).json(produtoEncontrado)
}

const listarProdutoControlador = async (req, res) => {
  const { categoria_id } = req.query
  const produtosFiltrados = await listarProdutoServico(categoria_id)

  return res.status(200).json(produtosFiltrados)
}

const editarProdutoControlador = async (req, res) => {
  const { id: produtoId } = req.params
  const arquivo = req.file
  const produtoEditado = await editarProdutoServico(req.body, produtoId, arquivo)

  return res.status(200).json(produtoEditado)
}

const deletarProdutoControlador = async (req, res) => {
  const { id: produtoId } = req.params
  const produtoExcluido = await deletarProdutoServico(produtoId)

  return res.status(200).json(produtoExcluido)
}

module.exports = {
  cadastrarProdutoControlador,
  detalharProdutoControlador,
  listarProdutoControlador,
  editarProdutoControlador,
  deletarProdutoControlador,
}
