const joi = require('joi')

const loginSchema = joi.object({
  email: joi.string().email().min(1).max(255).required().messages({
    'any.required': 'The email field is required',
    'string.empty': 'The email field is required',
    'string.base': 'The email field must have a valid format',
    'string.email': 'The email field must have a valid format',
    'string.min': 'The email field must have at least 1 character',
    'string.max': 'The email field must have a maximum of 255 characters',
  }),
  password: joi.string().required().messages({
    'any.required': 'The password field is required',
    'string.empty': 'The password field is required',
    'string.base': 'The password field must contain valid characters',
  }),
})

module.exports = { loginSchema }
