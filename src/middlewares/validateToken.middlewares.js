const { verify } = require('jsonwebtoken')
const { AppError } = require('../utils')

const validateTokenMiddleware = (req, res, next) => {
  const isAuthenticated = req.headers.authorization

  if (!isAuthenticated) {
    throw new AppError('To access this route, login is required.', 403)
  }

  const token = isAuthenticated.split(' ')[1]

  const user = verify(
    token,
    process.env.SECRET_KEY,
    (error, user) => {
      if (error) {
        if (error.name === 'TokenExpiredError') {
          throw new AppError('Expired token, please log in again.', 403)
        } else {
          throw new AppError('Invalid token.', 403)
        }
      }
      return user
    }
  )

  res.locals.user = user

  return next()
}

module.exports = { validateTokenMiddleware }
