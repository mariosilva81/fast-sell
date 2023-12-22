const { knex } = require('../utils')

const registerOrderRepository = async (client_id, observation, total_value) => {
  const order = await knex('orders')
    .insert({ client_id, observation, total_value })
    .returning('*')
  return order
}

const registerProductOrderRepository = async (product) => {
  const productOrder = await knex('order_products').insert(product)

  return productOrder
}

const listOrderRepository = async () => {
  return await knex('orders')
}

const filterOrderRepository = async (id) => {
  return await knex('orders').where(id)
}

const filterProductOrderRepository = async (order_id) => {
  return await knex('order_products').where(order_id)
}

module.exports = {
  registerOrderRepository,
  registerProductOrderRepository,
  listOrderRepository,
  filterOrderRepository,
  filterProductOrderRepository,
}
