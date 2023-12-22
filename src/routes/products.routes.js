const express = require('express')
const productRoute = express.Router()
const { productSchema } = require('../schemas')
const {
  validateBodyMiddleware,
  validateTokenMiddleware,
  validateIdMiddleware,
} = require('../middlewares')
const { multer } = require('../utils')
const {
  registerProductController,
  detailProductController,
  listProductController,
  editProductController,
  deleteProductController,
} = require('../controllers')

productRoute.post(
  '/',
  validateTokenMiddleware,
  multer.single('file'),
  validateBodyMiddleware(productSchema),
  validateIdMiddleware,
  registerProductController
)

productRoute.get('/', validateTokenMiddleware, listProductController)

productRoute.get(
  '/:id',
  validateTokenMiddleware,
  validateIdMiddleware,
  detailProductController
)

productRoute.put(
  '/:id',
  validateTokenMiddleware,
  multer.single('file'),
  validateBodyMiddleware(productSchema),
  validateIdMiddleware,
  editProductController
)

productRoute.delete(
  '/:id',
  validateTokenMiddleware,
  validateIdMiddleware,
  deleteProductController
)

module.exports = { productRoute }
