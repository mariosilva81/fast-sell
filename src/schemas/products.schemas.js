const joi = require('joi')

const productSchema = joi.object({
  description: joi.string().required().min(1).max(255).messages({
    'any.required': 'The description field is required',
    'string.empty': 'The description field is required',
    'string.base': 'The description field must be a text',
    'string.min': 'The description field must have at least 1 character',
    'string.max': 'The description field must have a maximum of 255 characters',
  }),
  stock_quantity: joi.number().required().positive().messages({
    'any.required': 'The stock_quantity field is required',
    'number.empty': 'The stock_quantity field is required',
    'number.positive': 'The stock_quantity field must be a positive number',
    'number.base': 'The stock_quantity field needs to be a valid number',
  }),
  value: joi.number().required().positive().messages({
    'any.required': 'The value field is required',
    'number.empty': 'The value field is required',
    'number.positive': 'The value field must be a positive number',
    'number.base': 'The value field needs to be a valid number',
  }),
  category_id: joi.number().required().positive().messages({
    'any.required': 'The category field is required',
    'number.empty': 'The category field is required',
    'number.positive': 'The category field must be a positive number',
    'number.base': 'The category field needs to be a valid number',
  }),
})

module.exports = { productSchema }
