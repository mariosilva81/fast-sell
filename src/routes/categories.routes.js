const express = require('express')
const categoryRoute = express.Router()
const { listCategoryControllers } = require('../controllers')

categoryRoute.get('/', listCategoryControllers)

module.exports = { categoryRoute }
