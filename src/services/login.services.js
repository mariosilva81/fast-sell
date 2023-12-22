const jwt = require('jsonwebtoken')
const { userByEmailRepository } = require('../repositories')

const loginService = async (userData) => {
  const { email } = userData

  const user = await userByEmailRepository(email)

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  })

  delete user.password

  const loggedUser = {
    id: user.id,
    nome: user.nome,
    email: user.email,
    token,
  }

  return loggedUser
}

module.exports = { loginService }
