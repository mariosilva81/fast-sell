const joi = require('joi')

const usuarioEsquema = joi.object({
  nome: joi.string().min(1).max(255).required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
    'string.min': 'O campo nome deve possuir no mínimo 1 caractere',
    'string.max': 'O campo nome deve possuir no máximo 255 caracteres',
  }),
  email: joi.string().email().min(1).max(255).required().messages({
    'any.required': 'O campo email é obrigatório',
    'string.empty': 'O campo email é obrigatório',
    'string.base': 'O campo email precisa ter um formato válido',
    'string.email': 'O campo email precisa ter um formato válido',
    'string.min': 'O campo email deve possuir no mínimo 1 caractere',
    'string.max': 'O campo email deve possuir no máximo 255 caracteres',
  }),
  senha: joi.string().required().messages({
    'any.required': 'O campo senha é obrigatório',
    'string.empty': 'O campo senha é obrigatório',
    'string.base': 'O campo senha deve conter caracteres válidos',
  }),
})

module.exports = usuarioEsquema
