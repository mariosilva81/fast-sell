const { loginServico } = require('../servicos/index.js')

const loginControlador = async (req, res) => {
  const userLogged = await loginServico(req.body)
  return res.status(200).json(userLogged)
}

module.exports = loginControlador
