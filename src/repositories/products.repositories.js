const knex = require('../utils')

const registerProductRepository = async (
  description,
  stock_quantity,
  value,
  category_id
) => {
  const product = await knex('products')
    .insert({
      description,
      stock_quantity,
      value,
      category_id,
    })
    .returning('*')

  return product
}
const detailProductRepository = async (id) => {
  return await knex('products').where({ id })
}

const listProductRepository = async () => {
  return await knex('products')
}

const editProductRepository = async (id, productData) => {
  return await knex('products').where({ id }).update(productData).returning('*')
}

const deleteProductRepository = async (id) => {
  return await knex('products').where({ id }).delete().returning('*')
}

const checkProductInOrderRepository = async (id) => {
  const foundProduct = await knex('order_products')
    .where('product_id', id)
    .select('id')
    .first()

  return !!foundProduct
}

module.exports = {
  registerProductRepository,
  detailProductRepository,
  listProductRepository,
  editProductRepository,
  deleteProductRepository,
  checkProductInOrderRepository,
}
