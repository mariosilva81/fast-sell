const {
  listarCategoriasRepositorio,
  detalharCategoriaRepositorio,
} = require('./categorias.repositorios')
const {
  usuarioPorEmailRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
} = require('./usuarios.repositorios')
const {
  cadastrarProdutoRepositorio,
  detalharProdutoRepositorio,
  listarProdutoRepositorio,
  editarProdutoRepositorio,
  deletarProdutoRepositorio,
  verificarProdutoEmPedidoRepositorio,
} = require('./produtos.repositorios')

const {
  cadastrarClienteRepositorio,
  detalharClienteEmail,
  detalharClienteCpf,
  editarClienteRepositorio,
  clientePorIdRepositorio,
  detalharClienteRepositorio,
  listarClientesRepositorio,
  filtrarClienteRepositorio,
} = require('./cliente.repositorios')
const {
  cadastrarPedidoRepositorio,
  cadastrarProdutoPedidoRepositorio,
  listarPedidosRepositorio,
  filtrarPedidoRepositorio,
  filtrarProdutoPedidoRepositorio
} = require('./pedidos.repositorios')
module.exports = {
  listarCategoriasRepositorio,
  detalharCategoriaRepositorio,
  usuarioPorEmailRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
  cadastrarProdutoRepositorio,
  detalharProdutoRepositorio,
  listarProdutoRepositorio,
  editarProdutoRepositorio,
  deletarProdutoRepositorio,
  cadastrarClienteRepositorio,
  detalharClienteEmail,
  detalharClienteCpf,
  editarClienteRepositorio,
  clientePorIdRepositorio,
  detalharClienteRepositorio,
  listarClientesRepositorio,
  filtrarClienteRepositorio,
  verificarProdutoEmPedidoRepositorio,
  cadastrarPedidoRepositorio,
  cadastrarProdutoPedidoRepositorio,
  listarPedidosRepositorio,
  filtrarPedidoRepositorio,
  filtrarProdutoPedidoRepositorio
}
