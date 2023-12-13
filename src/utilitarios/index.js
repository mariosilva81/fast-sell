const { enviarImagem, excluirImagem } = require('./backBlaze')

const {
  transporter,
  compileHTML,
  enviarEmailConfirmacao,
} = require('./nodeMailer')

module.exports = {
  enviarImagem,
  excluirImagem,
  transporter,
  compileHTML,
  enviarEmailConfirmacao,
}
