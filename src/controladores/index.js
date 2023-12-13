const listarCategoriasControlador = require('./categoria.controladores')
const {
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
} = require('./usuario.controladores')

const {
  cadastrarClienteControlador,
  detalharClienteControlador,
  editarClienteControlador,
  listarClientesControlador,
} = require('./cliente.controladores')

const loginControlador = require('./login.controladores')
const {
  cadastrarProdutoControlador,
  detalharProdutoControlador,
  listarProdutoControlador,
  editarProdutoControlador,
  deletarProdutoControlador,
} = require('./produto.controladores');
const { cadastrarPedidoControlador, listarPedidoControlador } = require('./pedido.controladores');


module.exports = {
  listarCategoriasControlador,
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
  loginControlador,
  cadastrarProdutoControlador,
  detalharProdutoControlador,
  listarProdutoControlador,
  editarProdutoControlador,
  deletarProdutoControlador,
  cadastrarClienteControlador,
  detalharClienteControlador,
  editarClienteControlador,
  listarClientesControlador,
  cadastrarPedidoControlador,
  listarPedidoControlador
}
