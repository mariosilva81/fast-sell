const { AppError } = require('../utils')
const {
  detailProductRepository,
  registerOrderRepository,
  registerProductOrderRepository,
  filterClientRepository,
  editProductRepository,
  filterOrderRepository,
  filterProductOrderRepository,
  listOrderRepository,
} = require('../repositories')
const { sendEmail } = require('../utils')

const registerOrderService = async (orderData) => {
  const { client_id, observation, order_products } = orderData
  const productsData = []
  let total_value = 0

  for (const product of order_products) {
    const foundProduct = await detailProductRepository(product.product_id)

    const { id, value, stock_quantity } = foundProduct[0]

    productsData.push({
      product_id: id,
      description: foundProduct[0].description,
      product_quantity: product.product_quantity,
      product_value: value,
    })

    total_value += value * product.product_quantity

    const stockProduct = stock_quantity - product.product_quantity

    if (stockProduct <= 0) {
      throw new AppError(
        `Insufficient stock for product: ${foundProduct[0].description}.`,
        404
      )
    }
    await editProductRepository(id, { stock_quantity: stockProduct })
  }

  const order = await registerOrderRepository(
    client_id,
    observation || null,
    total_value
  )

  const orderId = order[0].id

  for (const product of productsData) {
    const { product_id, product_quantity, product_value } = product

    await registerProductOrderRepository({
      order_id: orderId,
      product_id,
      product_quantity,
      product_value,
    })
  }

  const foundClient = await filterClientRepository({ id: client_id })

  const { name: nameClient, email: emailClient } = foundClient

  sendEmail(nameClient, orderId, emailClient, productsData)

  return {
    message: 'Order successfully placed!',
  }
}

const listOrderService = async (client_id) => {
  const listOrders = []
  let orders

  if (
    Number(client_id) === 0 ||
    (isNaN(Number(client_id)) && client_id !== undefined)
  ) {
    throw new AppError('Provide a valid client ID', 400)
  }

  if (client_id) {
    orders = await filterOrderRepository({ client_id })

    if (orders.length < 1) {
      throw new AppError('No order found with the provided client ID', 400)
    }
  } else {
    orders = await listOrderRepository()
  }

  for (const order of orders) {
    const listProducts = []
    const products = await filterProductOrderRepository({
      order_id: order.id,
    })

    for (const productsOrder of products) {
      if (Array.isArray(productsOrder)) {
        listProducts.push(...productsOrder)
      } else {
        listProducts.push(productsOrder)
      }
    }
    const detailOrder = {
      order: {
        id: order.id,
        total_value: order.total_value,
        observation: order.observation,
        client_id: order.client_id,
      },
      order_products: listProducts,
    }
    listOrders.push(detailOrder)
  }

  return listOrders
}

module.exports = {
  registerOrderService,
  listOrderService,
}
