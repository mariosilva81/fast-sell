const {
  detailCategoryRepository,
  listCategoryRepository,
} = require('./categories.repositories')

const {
  editUserRepository,
  registerUserRepository,
  userByEmailRepository,
  userByIdRepository,
} = require('./users.repositories')

const {
  checkProductInOrderRepository,
  deleteProductRepository,
  detailProductRepository,
  editProductRepository,
  listProductRepository,
  registerProductRepository,
} = require('./products.repositories')

const {
  detailClientRepository,
  editClientRepository,
  filterClientRepository,
  listClientRepository,
  registerClientRepository,
} = require('./clients.repositories')

const {
  filterOrderRepository,
  filterProductOrderRepository,
  listOrderRepository,
  registerOrderRepository,
  registerProductOrderRepository,
} = require('./orders.repositories')

module.exports = {
  detailCategoryRepository,
  listCategoryRepository,
  editUserRepository,
  registerUserRepository,
  userByEmailRepository,
  userByIdRepository,
  checkProductInOrderRepository,
  deleteProductRepository,
  detailProductRepository,
  editProductRepository,
  listProductRepository,
  registerProductRepository,
  detailClientRepository,
  editClientRepository,
  filterClientRepository,
  listClientRepository,
  registerClientRepository,
  filterOrderRepository,
  filterProductOrderRepository,
  listOrderRepository,
  registerOrderRepository,
  registerProductOrderRepository,
}
