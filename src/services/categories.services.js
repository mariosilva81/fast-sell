const { listCategoryRepository } = require('../repositories')

const listCategoryService = async () => {
  const categories = await listCategoryRepository()

  return categories
}

module.exports = { listCategoryService }
