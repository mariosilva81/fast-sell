const joi = require('joi')

const clienteEsquema = joi.object({
  nome: joi.string().min(1).max(255).required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
    'string.min': 'O campo nome deve possuir no mínimo 1 caractere',
    'string.max': 'O campo nome deve possuir no máximo 255 caracteres',
  }),
  email: joi.string().min(1).max(255).email().required().messages({
    'any.required': 'O campo email é obrigatório',
    'string.empty': 'O campo email é obrigatório',
    'string.base': 'O campo email precisa ter um formato válido',
    'string.email': 'O campo email precisa ter um formato válido',
    'string.min': 'O campo email deve possuir no mínimo 1 caractere',
    'string.max': 'O campo email deve possuir no máximo 255 caracteres',
  }),
  cpf: joi.string().min(11).max(11).required().messages({
    'any.required': 'O campo CPF é obrigatório',
    'string.empty': 'O campo CPF é obrigatório',
    'string.base': 'O campo CPF deve conter caracteres válidos',
    'string.min': 'O CPF deve possuir 11 caracteres',
    'string.max': 'O CPF deve possuir 11 caracteres',
  }),
  cep: joi.string().min(8).max(8).messages({
    'string.base': 'O campo cep deve conter caracteres válidos',
    'string.min': 'O cep deve possuir 8 caracteres',
    'string.max': 'O cep deve possuir 8 caracteres',
  }),
  rua: joi.string().min(1).max(255).messages({
    'string.base': 'O campo rua deve ser um texto',
    'string.min': 'O campo rua deve possuir no mínimo 1 caractere',
    'string.max': 'O campo rua deve possuir no máximo 255 caracteres',
  }),
  bairro: joi.string().min(1).max(50).messages({
    'string.base': 'O campo bairro deve ser um texto',
    'string.min': 'O campo bairro deve possuir no mínimo 1 caractere',
    'string.max': 'O campo bairro deve possuir no máximo 50 caracteres',
  }),
  numero: joi.number().messages({
    'number.positive': 'O campo number deve ser um número positivo',
    'number.base': 'O campo number precisa ser um número válido',
  }),
  cidade: joi.string().min(1).max(50).messages({
    'string.base': 'O campo cidade deve ser um texto',
    'string.min': 'O campo cidade deve possuir no mínimo 1 caractere',
    'string.max': 'O campo cidade deve possuir no máximo 50 caracteres',
  }),
  estado: joi.string().min(2).max(50).messages({
    'string.base': 'O campo estado deve ser um texto',
    'string.min': 'O campo estado deve possuir no mínimo 2 caracteres',
    'string.max': 'O campo estado deve possuir no máximo 50 caracteres',
  }),
})

module.exports = clienteEsquema
