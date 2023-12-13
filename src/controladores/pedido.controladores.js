const { cadastrarPedidoServico, listarPedidoServico } = require("../servicos/index.js");

const cadastrarPedidoControlador = async (req, res) => {
    const dadosPedido = req.body;
    const pedido = await cadastrarPedidoServico(dadosPedido)

    return res.status(201).json(pedido)
}

const listarPedidoControlador = async (req, res) => {
    const { cliente_id } = req.query
    const pedido = await listarPedidoServico(cliente_id)

    return res.status(200).json(pedido)
}
module.exports = {
    cadastrarPedidoControlador,
    listarPedidoControlador,
}