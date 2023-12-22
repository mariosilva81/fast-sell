const { knex } = require('../utils')

const userByEmailRepository = async (email) => {
  const user = await knex('users').where({ email })

  return user[0]
}

const userByIdRepository = async (id) => {
  const user = await knex('users').where({ id }).select('id', 'name', 'email')

  return user
}

const registerUserRepository = async (name, email, encryptedPassword) => {
  const user = await knex('users')
    .insert({
      name,
      email,
      password: encryptedPassword,
    })
    .returning('*')

  return user
}

const editUserRepository = async (userData, id) => {
  return await knex('users')
    .where({ id })
    .update(userData)
    .returning(['id', 'name', 'email'])
}

module.exports = {
  userByEmailRepository,
  userByIdRepository,
  registerUserRepository,
  editUserRepository,
}
