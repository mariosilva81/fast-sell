const {
  registerUserService,
  detailUserService,
  editUserService,
} = require('../services')

const registerUserController = async (req, res) => {
  const userData = req.body
  const user = await registerUserService(userData)

  return res.status(201).json(user)
}

const detailUserController = async (_req, res) => {
  const { id: userId } = res.locals.user
  const user = await detailUserService(userId)

  return res.status(200).json(user)
}

const editUserController = async (req, res) => {
  const { id: userId } = res.locals.user
  const userData = req.body
  const user = await editUserService(userData, userId)

  return res.status(200).json(user)
}

module.exports = {
  registerUserController,
  detailUserController,
  editUserController,
}
