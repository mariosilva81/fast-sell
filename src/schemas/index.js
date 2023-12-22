const { userSchema } = require('./users.schemas')
const { loginSchema } = require('./login.schemas')
const { productSchema } = require('./products.schemas')
const { clientSchema } = require('./clients.schemas')
const { orderSchema } = require('./orders.schemas')

module.exports = {
  userSchema,
  loginSchema,
  productSchema,
  clientSchema,
  orderSchema,
}
