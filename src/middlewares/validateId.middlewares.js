const { AppError } = require('../utils')
const {
  detailCategoryRepository,
  detailProductRepository,
  detailClientRepository,
} = require('../repositories')

const validateIdMiddleware = async (req, _res, next) => {
  const { id } = req.params
  const { category_id } = req.body
  const path = req.baseUrl + req.route.path

  if (id && isNaN(id)) {
    throw new AppError('The parameter ID needs to be a valid number.', 400)
  }

  if (category_id) {
    const category = await detailCategoryRepository(category_id)
    if (category.length < 1)
      throw new AppError('Category not found!', 404)
  }

  if (path === '/product/:id') {
    const product = await detailProductRepository(id)
    if (product.length < 1)
      throw new AppError('Product not found!', 404)
  }

  if (path === '/client/:id') {
    const client = await detailClientRepository(id)

    if (client.length < 1)
      throw new AppError('Client not found!', 404)
  }

  return next()
}

module.exports = { validateIdMiddleware }
