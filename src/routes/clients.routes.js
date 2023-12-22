const express = require('express')
const clientRoute = express.Router()
const { clientSchema } = require('../schemas')
const {
  validateBodyMiddleware,
  validateClientDataMiddleware,
  validateTokenMiddleware,
  validateIdMiddleware,
} = require('../middlewares')
const {
  registerClientController,
  editClientController,
  listClientController,
  detailClientController,
} = require('../controllers')

clientRoute.post(
  '/',
  validateTokenMiddleware,
  validateBodyMiddleware(clientSchema),
  validateClientDataMiddleware,
  registerClientController
)

clientRoute.get('/', validateTokenMiddleware, listClientController)

clientRoute.get(
  '/:id',
  validateTokenMiddleware,
  validateIdMiddleware,
  detailClientController
)

clientRoute.put(
  '/:id',
  validateTokenMiddleware,
  validateIdMiddleware,
  validateBodyMiddleware(clientSchema),
  validateClientDataMiddleware,
  editClientController
)

module.exports = { clientRoute }
