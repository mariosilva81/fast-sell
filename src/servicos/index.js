const listarCategoriasServico = require('./categoria.servicos')
const {
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
} = require('./usuario.servicos')

const {
  cadastrarClienteServico,
  editarClienteServico,
  listarClientesServico,
  detalharClienteServico,
} = require('./cliente.servicos')

const loginServico = require('./login.servicos')
const {
  cadastrarProdutoServico,
  detalharProdutoServico,
  listarProdutoServico,
  editarProdutoServico,
  deletarProdutoServico,
} = require('./produto.servicos');
const { cadastrarPedidoServico, listarPedidoServico } = require('./pedido.servicos');

module.exports = {
  listarCategoriasServico,
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
  loginServico,
  cadastrarProdutoServico,
  detalharProdutoServico,
  listarProdutoServico,
  editarProdutoServico,
  deletarProdutoServico,
  cadastrarClienteServico,
  editarClienteServico,
  listarClientesServico,
  detalharClienteServico,
  cadastrarPedidoServico,
  listarPedidoServico
}
