const { registerOrderService, listOrderService } = require('../services')

const registerOrderController = async (req, res) => {
  const orderData = req.body
  const order = await registerOrderService(orderData)

  return res.status(201).json(order)
}

const listOrderController = async (req, res) => {
  const { client_id } = req.query
  const order = await listOrderService(client_id)

  return res.status(200).json(order)
}
module.exports = {
  registerOrderController,
  listOrderController,
}
