const { listarCategoriasRepositorio } = require('../repositorios')

const listarCategoriasServico = async () => {
  const categorias = await listarCategoriasRepositorio()

  return categorias
}

module.exports = listarCategoriasServico
