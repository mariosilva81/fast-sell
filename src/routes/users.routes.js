const express = require('express')
const userRoute = express.Router()
const { userSchema } = require('../schemas')
const {
  validateBodyMiddleware,
  validateEmailMiddleware,
  validateTokenMiddleware,
  validateIdMiddleware,
} = require('../middlewares')
const {
  registerUserController,
  detailUserController,
  editUserController,
} = require('../controllers')

userRoute.post(
  '/',
  validateBodyMiddleware(userSchema),
  validateEmailMiddleware,
  registerUserController
)

userRoute.get(
  '/',
  validateTokenMiddleware,
  validateIdMiddleware,
  detailUserController
)

userRoute.put(
  '/',
  validateTokenMiddleware,
  validateBodyMiddleware(userSchema),
  validateEmailMiddleware,
  editUserController
)

module.exports = { userRoute }
