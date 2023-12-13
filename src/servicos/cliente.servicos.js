const {
  cadastrarClienteRepositorio,
  detalharClienteRepositorio,
  editarClienteRepositorio,
  listarClientesRepositorio,
} = require('../repositorios/index.js')

const cadastrarClienteServico = async (dadosCliente) => {
  const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
    dadosCliente

  const clienteCadastrado = await cadastrarClienteRepositorio({
    nome,
    email,
    cpf,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
  })

  const cliente = { id: clienteCadastrado[0].id, nome, email, cpf }

  return cliente
}

const detalharClienteServico = async (clienteDecodificado) => {
  const clienteId = Number(clienteDecodificado)
  const clienteEncontrado = await detalharClienteRepositorio(clienteId)

  return clienteEncontrado[0]
}

const listarClientesServico = async () => {
  const clientes = await listarClientesRepositorio()

  return clientes
}

const editarClienteServico = async (dadosCliente, clienteDecodificado) => {
  const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
    dadosCliente
  const id = Number(clienteDecodificado)

  const clienteEditado = await editarClienteRepositorio(
    { nome, email, cpf, cep, rua, numero, bairro, cidade, estado },
    { id }
  )

  return clienteEditado
}

module.exports = {
  cadastrarClienteServico,
  detalharClienteServico,
  editarClienteServico,
  listarClientesServico,
}
