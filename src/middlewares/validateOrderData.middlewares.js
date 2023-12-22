const { AppError } = require('../utils')
const {
  detailClientRepository,
  detailProductRepository,
} = require('../repositories')

const validateOrderDataMiddleware = async (req, _res, next) => {
  const { client_id: id, order_products } = req.body

  if (id) {
    const client = await detailClientRepository(id)

    if (client.length < 1) throw new AppError('Client not found!', 404)
  }

  if (order_products.length < 1) {
    throw new AppError(
      'The product list is empty. At least one product needs to be provided.',
      404
    )
  }

  const listProducts = order_products.map(async (item) => {
    const id = item.product_id
    const product = await detailProductRepository(id)

    if (product.length < 1) {
      throw new AppError('Product not found!', 404)
    }

    if (product[0].stock_quantity < item.product_quantity) {
      throw new AppError(
        `Insufficient stock for the product: ${product[0].description}. `,
        404
      )
    }

    return product
  })

  await Promise.all(listProducts)

  return next()
}

module.exports = { validateOrderDataMiddleware }
