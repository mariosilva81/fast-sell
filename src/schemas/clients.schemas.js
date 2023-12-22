const joi = require('joi')

const clientSchema = joi.object({
  name: joi.string().min(1).max(255).required().messages({
    'any.required': 'The name field is required',
    'string.empty': 'The name field is required',
    'string.base': 'The name field must be a text',
    'string.min': 'The name field must have at least 1 character',
    'string.max': 'The name field must have a maximum of 255 characters',
  }),
  email: joi.string().min(1).max(255).email().required().messages({
    'any.required': 'The email field is required',
    'string.empty': 'The email field is required',
    'string.base': 'The email field must have a valid format',
    'string.email': 'The email field must have a valid format',
    'string.min': 'The email field must have at least 1 character',
    'string.max': 'The email field must have a maximum of 255 characters',
  }),
  cpf: joi.string().min(11).max(11).required().messages({
    'any.required': 'The CPF field is required',
    'string.empty': 'The CPF field is required',
    'string.base': 'The CPF field must contain valid characters',
    'string.min': 'The CPF must have 11 characters',
    'string.max': 'The CPF must have 11 characters',
  }),
  zip: joi.string().min(8).max(8).messages({
    'string.base': 'The zip code field must contain valid characters',
    'string.min': 'The zip code must have 8 characters',
    'string.max': 'The zip code must have 8 characters',
  }),
  street: joi.string().min(1).max(255).messages({
    'string.base': 'The street field must be a text',
    'string.min': 'The street field must have at least 1 character',
    'string.max': 'The street field must have a maximum of 255 characters',
  }),
  neighborhood: joi.string().min(1).max(50).messages({
    'string.base': 'The neighborhood field must be a text',
    'string.min': 'The neighborhood field must have at least 1 character',
    'string.max': 'The neighborhood field must have a maximum of 50 characters',
  }),
  number: joi.number().messages({
    'number.positive': 'The number field must be a positive number',
    'number.base': 'The number field needs to be a valid number',
  }),
  city: joi.string().min(1).max(50).messages({
    'string.base': 'The city field must be a text',
    'string.min': 'The city field must have at least 1 character',
    'string.max': 'The city field must have a maximum of 50 characters',
  }),
  state: joi.string().min(2).max(50).messages({
    'string.base': 'The state field must be a text',
    'string.min': 'The state field must have at least 2 characters',
    'string.max': 'The state field must have a maximum of 50 characters',
  }),
})

module.exports = { clientSchema }
