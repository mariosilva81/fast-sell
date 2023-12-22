const bcrypt = require('bcrypt')
const {
  registerUserRepository,
  userByIdRepository,
  editUserRepository,
} = require('../repositories')

const registerUserService = async (userData) => {
  const { name, email, password } = userData

  const encryptedPassword = await bcrypt.hash(password, 10)

  const user = await registerUserRepository(name, email, encryptedPassword)

  const userWithoutPassword = { id: user[0].id, name, email }

  return userWithoutPassword
}

const detailUserService = async (id) => {
  const userId = Number(id)
  const user = await userByIdRepository(userId)

  delete user.password

  return user[0]
}

const editUserService = async (userData, user) => {
  const { name, email, password } = userData

  const encryptedPassword = await bcrypt.hash(password, 10)

  const foundUser = await userByIdRepository(Number(user))

  if (foundUser[0].email === email) {
    const editedUser = await editUserRepository(
      { name, password: encryptedPassword },
      user
    )

    delete editedUser.password

    return editedUser[0]
  } else {
    const editedUser = await editUserRepository(
      { name, email, password: encryptedPassword },
      user
    )

    delete editedUser.password

    return editedUser[0]
  }
}

module.exports = {
  registerUserService,
  detailUserService,
  editUserService,
}
