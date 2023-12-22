const { AppError } = require('../utils')
const { knex } = require('../utils')
const bcrypt = require('bcrypt')

const validateLoginDataMiddleware = async (req, _res, next) => {
  const { email, password } = req.body

  const user = await knex('users').where({ email }).first()

  if (!user) throw new AppError('Incorrect email and/or password.', 401)

  const encryptedPassword = user.password
  const validatePassword = await bcrypt.compare(password, encryptedPassword)

  if (!validatePassword)
    throw new AppError('Incorrect email and/or password.', 401)

  return next()
}

module.exports = { validateLoginDataMiddleware }
