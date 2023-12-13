const { Erro } = require('../erros.js')
const {
  detalharCategoriaRepositorio,
  detalharProdutoRepositorio,
  detalharClienteRepositorio,
} = require('../repositorios/index.js')

const verificaId = async (req, res, next) => {
  const { id } = req.params
  const { categoria_id } = req.body
  const caminhoBase = req.baseUrl + req.route.path

  if (id && isNaN(id)) {
    throw new Erro('O parâmetro id precisa ser um número válido', 400)
  }

  if (categoria_id) {
    const categoriaEncontrada = await detalharCategoriaRepositorio(categoria_id)
    if (categoriaEncontrada.length < 1)
      throw new Erro('Categoria não encontrada!', 404)
  }

  if (caminhoBase === '/produto/:id') {
    const produtoEncontrado = await detalharProdutoRepositorio(id)
    if (produtoEncontrado.length < 1)
      throw new Erro('Produto não encontrado!', 404)
  }

  if (caminhoBase === '/cliente/:id') {
    const clienteEncontrado = await detalharClienteRepositorio(id)

    if (clienteEncontrado.length < 1)
      throw new Erro('Cliente não encontrado!', 404)
  }

  return next()
}

module.exports = verificaId
