const { categoryRoute } = require('./categories.routes')
const { userRoute } = require('./users.routes')
const { loginRoute } = require('./login.routes')
const { productRoute } = require('./products.routes')
const { clientRoute } = require('./clients.routes')
const { orderRoute } = require('./orders.routes')

module.exports = {
  categoryRoute,
  userRoute,
  loginRoute,
  productRoute,
  clientRoute,
  orderRoute,
}
