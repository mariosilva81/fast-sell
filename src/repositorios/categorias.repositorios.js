const knex = require('../config/conexao_DB')

const listarCategoriasRepositorio = async () => {
  const categorias = await knex('categorias')
  return categorias
}

const detalharCategoriaRepositorio = async (categoria_id) => {
  const categoria = await knex('categorias').where({ id: categoria_id })
  return categoria
}

module.exports = {
  listarCategoriasRepositorio,
  detalharCategoriaRepositorio,
}
