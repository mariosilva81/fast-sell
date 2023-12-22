const express = require('express')
const loginRoute = express.Router()
const { loginController } = require('../controllers')
const {
  validateBodyMiddleware,
  validateLoginDataMiddleware,
} = require('../middlewares')
const { loginSchema } = require('../schemas')

loginRoute.post(
  '/',
  validateBodyMiddleware(loginSchema),
  validateLoginDataMiddleware,
  loginController
)

module.exports = { loginRoute }
