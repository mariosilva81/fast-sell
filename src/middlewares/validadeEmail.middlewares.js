const { AppError } = require('../utils')
const { userByEmailRepository, userByIdRepository } = require('../repositories')

const validateEmailMiddleware = async (req, res, next) => {
  const { email } = req.body
  const putMethod = req.route.methods.put

  const foundUser = await userByEmailRepository(email)

  if (putMethod) {
    const { id } = res.locals.user
    const databaseUser = await userByIdRepository(id)

    if (databaseUser[0].email === email) {
      return next()
    }
  }

  if (foundUser) {
    throw new AppError(
      'There is already a registered user with the provided email.',
      409
    )
  }

  return next()
}

module.exports = { validateEmailMiddleware }
