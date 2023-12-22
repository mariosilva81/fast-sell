const express = require('express')
const orderRoute = express.Router()
const {
  validateOrderDataMiddleware,
  validateTokenMiddleware,
  validateBodyMiddleware,
} = require('../middlewares')
const {
  registerOrderController,
  listOrderController,
} = require('../controllers')
const { orderSchema } = require('../schemas')

orderRoute.post(
  '/',
  validateTokenMiddleware,
  validateBodyMiddleware(orderSchema),
  validateOrderDataMiddleware,
  registerOrderController
)

orderRoute.get('/', validateTokenMiddleware, listOrderController)

module.exports = { orderRoute }
