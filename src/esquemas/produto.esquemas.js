const joi = require('joi')

const produtoEsquema = joi.object({
  
  descricao: joi.string().required().min(1).max(255).messages({
    'any.required': 'O campo descrição é obrigatório',
    'string.empty': 'O campo descrição é obrigatório',
    'string.base': 'O campo descrição deve ser um texto',
    'string.min': 'O campo descrição deve possuir no mínimo 1 caractere',
    'string.max': 'O campo descrição deve possuir no máximo 255 caracteres',
  }),
  quantidade_estoque: joi.number().required().positive().messages({
    'any.required': 'O campo quantidade_estoque é obrigatório',
    'number.empty': 'O campo quantidade_estoque é obrigatório',
    'number.positive': 'O campo quantidade_estoque deve ser um número positivo',
    'number.base': 'O campo quantidade_estoque precisa ser um número válido',
  }),
  valor: joi.number().required().positive().messages({
    'any.required': 'O campo valor é obrigatório',
    'number.empty': 'O campo valor é obrigatório',
    'number.positive': 'O campo valor deve ser um número positivo',
    'number.base': 'O campo valor precisa ser um número válido',
  }),
  categoria_id: joi.number().required().positive().messages({
    'any.required': 'O campo categoria é obrigatório',
    'number.empty': 'O campo categoria é obrigatório',
    'number.positive': 'O campo categoria deve ser um número positivo',
    'number.base': 'O campo categoria precisa ser um número válido',
  }),
})

module.exports = produtoEsquema
