const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email',
        'string.empty': 'Email is required'
    }),
    password: Joi.string().min(6).regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/).required().messages({
        'string.min': 'Password must be at least 6 characters',
        'string.pattern.base': 'Password must include both letters and numbers',
        'string.empty': 'Password is required'
    })
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const updateProfileSchema = Joi.object({
    name: Joi.string(),
    password: Joi.string().min(6).regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
}).min(1); // At least one field should be present

module.exports = {
    registerSchema,
    loginSchema,
    updateProfileSchema
};
