const { knex } = require('../utils')

const listCategoryRepository = async () => {
  const categories = await knex('categories')
  return categories
}

const detailCategoryRepository = async (category_id) => {
  const category = await knex('categories').where({ id: category_id })
  return category
}

module.exports = {
  listCategoryRepository,
  detailCategoryRepository,
}
