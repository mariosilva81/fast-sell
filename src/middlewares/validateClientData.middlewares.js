const { AppError } = require('../utils')
const { filterClientRepository } = require('../repositories')

const validateClientDataMiddleware = async (req, _res, next) => {
  const { email, cpf } = req.body
  const { id: clientId } = req.params

  const clientWithExistingEmail = await filterClientRepository({ email })
  const clientWithExistingCPF = await filterClientRepository({ cpf })

  if (
    clientWithExistingEmail &&
    clientWithExistingEmail.id !== Number(clientId)
  ) {
    throw new AppError(
      'There is already a client registered with this email in the system.',
      400
    )
  }

  if (clientWithExistingCPF && clientWithExistingCPF.id !== Number(clientId)) {
    throw new AppError(
      'There is already a client registered with this CPF in the system.',
      400
    )
  }

  return next()
}

module.exports = { validateClientDataMiddleware }
