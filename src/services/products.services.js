const { AppError } = require('../utils')
const {
  registerProductRepository,
  detailProductRepository,
  listProductRepository,
  editProductRepository,
  deleteProductRepository,
  checkProductInOrderRepository,
} = require('../repositories')
const { deleteImage, sendImage } = require('../utils')

const registerProductService = async (productData, file) => {
  const { description, stock_quantity, value, category_id } = productData

  const registeredProduct = await registerProductRepository(
    description,
    stock_quantity,
    value,
    category_id
  )

  if (!file) {
    return registeredProduct[0]
  }

  const path = `${
    registeredProduct[0].id
  }_${registeredProduct[0].description.replaceAll(' ', '_')}`

  const registerImage = await sendImage(path, file.buffer, file.mimetype)

  const productWithImage = await editProductRepository(
    Number(registeredProduct[0].id),
    {
      product_image: registerImage.path,
    }
  )

  const product = {
    id: productWithImage[0].id,
    description: productWithImage[0].description,
    stock_quantity: productWithImage[0].stock_quantity,
    value: productWithImage[0].value,
    product_image: productWithImage[0].product_image,
    url_imagem: registerImage.url,
    category_id: productWithImage[0].category_id,
  }

  return product
}

const detailProductService = async (productId) => {
  const product = await detailProductRepository(Number(productId))

  if (product[0].product_image) {
    product[0].product_image = `https://${process.env.BUCKET_NAME}.${process.env.ENDPOINT_BACKBLAZE}/${product[0].product_image}`
  }

  return product[0]
}

const listProductService = async (category_id) => {
  const products = await listProductRepository()
  if (typeof category_id === 'undefined') {
    return products
  }

  const filteredProducts = products.filter((product) => {
    return Number(category_id) === product.category_id
  })

  if (filteredProducts.length < 1) {
    throw new AppError('No product found with the provided filter.', 404)
  }

  return filteredProducts
}

const editProductService = async (productData, productId, file) => {
  const { description, stock_quantity, value, category_id } = productData

  const registerImage = async () => {
    if (file) {
      const path = `${productId}_${description.replaceAll(' ', '_')}`

      return await sendImage(path, file.buffer, file.mimetype)
    }
  }

  const product = await editProductRepository(Number(productId), {
    description,
    stock_quantity,
    value,
    category_id,
    product_image: registerImage.path,
  })

  return product[0]
}

const deleteProductService = async (productId) => {
  if (isNaN(productId)) {
    throw new AppError('A valid product ID must be provided.', 400)
  }

  const productInOrder = await checkProductInOrderRepository(Number(productId))

  if (productInOrder)
    throw new AppError(
      'Unable to delete the product because it is linked to an order.',
      400
    )

  const product = await detailProductRepository(productId)

  if (product) await deleteImage(product[0].product_image)

  await deleteProductRepository(Number(productId))

  return { message: 'Product deleted successfully.' }
}

module.exports = {
  registerProductService,
  detailProductService,
  listProductService,
  editProductService,
  deleteProductService,
}
