class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

const errorHandler = async (error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ mensagem: error.message })
  }

  console.error(error)

  return res.status(500).json({ mensagem: 'Internal Server error.' })
}

module.exports = {
  AppError,
  errorHandler,
}
