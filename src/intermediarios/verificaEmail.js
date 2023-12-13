const { Erro } = require('../erros.js')
const {
  usuarioPorEmailRepositorio,
  usuarioPorIdRepositorio,
} = require('../repositorios/index.js')

const verificaEmail = async (req, res, next) => {
  const { email } = req.body
  const metodoPut = req.route.methods.put

  const usuarioEncontrado = await usuarioPorEmailRepositorio(email)

  if (metodoPut) {
    const { id } = res.locals.usuarioDecodificado
    const usuarioNoBanco = await usuarioPorIdRepositorio(id)

    if (usuarioNoBanco[0].email === email) {
      return next()
    }
  }

  if (usuarioEncontrado) {
    throw new Erro('Já existe usuário cadastrado com o email informado.', 409)
  }

  return next()
}

module.exports = verificaEmail
