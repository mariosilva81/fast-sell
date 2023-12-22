const { listCategoryService } = require('../services')

const listCategoryControllers = async (_req, res) => {
  const categories = await listCategoryService()
  return res.status(200).json(categories)
}

module.exports = { listCategoryControllers }
