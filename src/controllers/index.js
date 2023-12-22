const { listCategoryControllers } = require('./categories.controllers')
const {
  registerUserController,
  detailUserController,
  editUserController,
} = require('./users.controllers')

const {
  registerClientController,
  detailClientController,
  listClientController,
  editClientController,
} = require('./clients.controllers')

const { loginController } = require('./login.controllers')
const {
  registerProductController,
  detailProductController,
  listProductController,
  editProductController,
  deleteProductController,
} = require('./products.controllers')
const {
  registerOrderController,
  listOrderController,
} = require('./orders.controllers')

module.exports = {
  listCategoryControllers,
  registerUserController,
  detailUserController,
  editUserController,
  registerClientController,
  detailClientController,
  listClientController,
  editClientController,
  loginController,
  registerProductController,
  detailProductController,
  listProductController,
  editProductController,
  deleteProductController,
  registerOrderController,
  listOrderController,
}
