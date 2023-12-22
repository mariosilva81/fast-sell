const joi = require('joi')

const orderSchema = joi.object({
  client_id: joi
    .number()
    .integer()
    .max(100000000)
    .required()
    .positive()
    .messages({
      'any.required': 'The client_id field is required',
      'number.positive': 'The client_id field must be a positive number',
      'number.integer': 'The client_id field must be an integer',
      'number.base': 'The client_id field needs to be a valid number',
      'number.max': 'The client_id field needs to be a valid client ID',
    }),
  observation: joi.string().max(255).messages({
    'string.base': 'The observation field must be a text',
    'string.max': 'The observation field must have a maximum of 255 characters',
  }),
  order_products: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        product_id: joi
          .number()
          .integer()
          .max(1000000)
          .required()
          .positive()
          .messages({
            'any.required': 'The product_id field is required',
            'number.positive': 'The product_id field must be a positive number',
            'number.integer': 'The product_id field must be an integer',
            'number.base': 'The product_id field needs to be a valid number',
            'number.max': 'The product_id field needs to be a valid product ID',
          }),
        product_quantity: joi
          .number()
          .max(1000000)
          .integer()
          .required()
          .positive()
          .messages({
            'any.required': 'The product_quantity field is required',
            'number.positive':
              'The product_quantity field must be a positive number',
            'number.integer': 'The product_quantity field must be an integer',
            'number.base':
              'The product_quantity field needs to be a valid number',
            'number.max':
              'The product_quantity field needs to be a valid product quantity',
          }),
      })
    )
    .messages({
      'array.base': 'The order_products field must be an array',
      'array.min': 'The order must contain at least one product',
    }),
})

module.exports = { orderSchema }
