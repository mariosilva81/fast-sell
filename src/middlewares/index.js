const { validateEmailMiddleware } = require('./validadeEmail.middlewares')
const {
  validateLoginDataMiddleware,
} = require('./validadeLoginData.middlewares')
const { validateBodyMiddleware } = require('./validateBody.middlewares')
const {
  validateClientDataMiddleware,
} = require('./validateClientData.middlewares')
const { validateIdMiddleware } = require('./validateId.middlewares')
const {
  validateOrderDataMiddleware,
} = require('./validateOrderData.middlewares')
const { validateTokenMiddleware } = require('./validateToken.middlewares')

module.exports = {
  validateEmailMiddleware,
  validateLoginDataMiddleware,
  validateBodyMiddleware,
  validateClientDataMiddleware,
  validateIdMiddleware,
  validateOrderDataMiddleware,
  validateTokenMiddleware,
}
