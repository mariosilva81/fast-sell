const {
  registerClientService,
  detailClientService,
  editClientService,
  listClientService,
} = require('../services')

const registerClientController = async (req, res) => {
  const clientData = req.body
  const client = await registerClientService(clientData)

  return res.status(201).json(client)
}

const detailClientController = async (req, res) => {
  const { id } = req.params
  const client = await detailClientService(id)

  return res.status(200).json(client)
}

const editClientController = async (req, res) => {
  const { id } = req.params
  const clientData = req.body
  const client = await editClientService(clientData, id)

  return res.status(200).json(client)
}

const listClientController = async (_req, res) => {
  const clients = await listClientService()

  return res.status(200).json(clients)
}

module.exports = {
  registerClientController,
  detailClientController,
  editClientController,
  listClientController,
}
