const joi = require('joi')

const pedidoEsquema = joi.object({
  cliente_id: joi.number().integer().max(100000000).required().positive().messages({
      'any.required': 'O campo cliente_id é obrigatório',
      'number.positive': 'O campo cliente_id deve ser um número positivo',
      'number.integer': 'O campo cliente_id deve ser um número inteiro',
      'number.base': 'O campo cliente_id precisa ser um número válido',
      'number.max': 'O campo cliente_id precisa ser um id de cliente válido',
    }),
  observacao: joi.string().max(255).messages({
    'string.base': 'O campo observação deve ser um texto',
    'string.max': 'O campo observação deve possuir no máximo 255 caracteres',
  }),
  pedido_produtos: joi.array().min(1).required().items(
      joi.object({
        produto_id: joi.number().integer().max(1000000).required().positive().messages({
            'any.required': 'O campo produto_id é obrigatório',
            'number.positive': 'O campo produto_id deve ser um número positivo',
            'number.integer': 'O campo produto_id deve ser um número inteiro',
            'number.base': 'O campo produto_id precisa ser um número válido',
            'number.max': 'O campo produto_id precisa ser um id de produto válido',
          }),
        quantidade_produto: joi.number().max(1000000).integer().required().positive().messages({
            'any.required': 'O campo quantidade_produto é obrigatório',
            'number.positive': 'O campo quantidade_produto deve ser um número positivo',
            'number.integer': 'O campo quantidade_produto deve ser um número inteiro',
            'number.base': 'O campo quantidade_produto precisa ser um número válido',
            'number.max': 'O campo quantidade_produto precisa ser uma quantidade de produto válida',
          }),
      })
    ).messages({
      'array.base': 'O campo pedido_produtos deve ser um array',
      'array.min': 'O pedido precisa conter ao menos um produto',
    }),
})

module.exports = pedidoEsquema
