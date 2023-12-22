const {
  registerClientRepository,
  detailClientRepository,
  editClientRepository,
  listClientRepository,
} = require('../repositories')

const registerClientService = async (clientData) => {
  const { name, email, cpf, zip, street, number, neighborhood, city, state } =
    clientData

  const registeredClient = await registerClientRepository({
    name,
    email,
    cpf,
    zip,
    street,
    number,
    neighborhood,
    city,
    state,
  })

  const client = { id: registeredClient[0].id, name, email, cpf }

  return client
}

const detailClientService = async (client) => {
  const clientId = Number(client)
  const foundClient = await detailClientRepository(clientId)

  return foundClient[0]
}

const listClientService = async () => {
  const clients = await listClientRepository()

  return clients
}

const editClientService = async (clientData, client) => {
  const { name, email, cpf, zip, street, number, neighborhood, city, state } =
    clientData
  const clientId = Number(client)

  const editedClient = await editClientRepository(
    { name, email, cpf, zip, street, number, neighborhood, city, state },
    { clientId }
  )

  return editedClient
}

module.exports = {
  registerClientService,
  detailClientService,
  editClientService,
  listClientService,
}
