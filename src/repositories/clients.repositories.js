const { knex } = require('../utils')

const registerClientRepository = async (clientData) => {
  const client = await knex('clients').insert(clientData).returning('*')

  return client
}

const detailClientRepository = async (id) => {
  const client = await knex('clients')
    .where({ id })
    .select(
      'id',
      'name',
      'email',
      'cpf',
      'zip',
      'street',
      'number',
      'neighborhood',
      'city',
      'state'
    )

  return client
}

const filterClientRepository = async (filter) => {
  const client = await knex('clients').where(filter)

  return client[0]
}

const editClientRepository = async (clientData, id) => {
  const client = await knex('clients')
    .where(id)
    .update(clientData)
    .returning([
      'name',
      'email',
      'cpf',
      'zip',
      'street',
      'number',
      'neighborhood',
      'city',
      'state',
    ])

  return client[0]
}

const listClientRepository = async () => {
  return await knex('clients')
}

module.exports = {
  registerClientRepository,
  editClientRepository,
  detailClientRepository,
  listClientRepository,
  filterClientRepository,
}
