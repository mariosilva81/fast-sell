const { listCategoryService } = require('./categories.services')
const {
  detailUserService,
  editUserService,
  registerUserService,
} = require('./users.services')
const {
  detailClientService,
  editClientService,
  listClientService,
  registerClientService,
} = require('./clients.services')
const { loginService } = require('./login.services')
const {
  deleteProductService,
  detailProductService,
  editProductService,
  listProductService,
  registerProductService,
} = require('./products.services')
const { listOrderService, registerOrderService } = require('./orders.services')

module.exports = {
  listCategoryService,
  detailUserService,
  editUserService,
  registerUserService,
  detailClientService,
  editClientService,
  listClientService,
  registerClientService,
  loginService,
  deleteProductService,
  detailProductService,
  editProductService,
  listProductService,
  registerProductService,
  listOrderService,
  registerOrderService,
}
