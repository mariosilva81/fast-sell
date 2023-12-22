const {
  registerProductService,
  detailProductService,
  listProductService,
  editProductService,
  deleteProductService,
} = require('../services')

const registerProductController = async (req, res) => {
  const productData = req.body
  const file = req.file
  const product = await registerProductService(productData, file)

  return res.status(201).json(product)
}

const detailProductController = async (req, res) => {
  const { id: productId } = req.params
  const product = await detailProductService(productId)

  return res.status(200).json(product)
}

const listProductController = async (req, res) => {
  const { category_id } = req.query
  const products = await listProductService(category_id)

  return res.status(200).json(products)
}

const editProductController = async (req, res) => {
  const productData = req.body
  const { id: productId } = req.params
  const file = req.file
  const product = await editProductService(productData, productId, file)

  return res.status(200).json(product)
}

const deleteProductController = async (req, res) => {
  const { id: productId } = req.params
  const product = await deleteProductService(productId)

  return res.status(200).json(product)
}

module.exports = {
  registerProductController,
  detailProductController,
  listProductController,
  editProductController,
  deleteProductController,
}
