const { listarCategoriasServico } = require('../servicos')

const listarCategoriasControlador = async (req, res) => {
  const categorias = await listarCategoriasServico()
  return res.status(200).json(categorias)
}

module.exports = listarCategoriasControlador
