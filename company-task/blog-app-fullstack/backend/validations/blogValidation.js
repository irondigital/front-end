const Joi = require('joi');

const createBlogSchema = Joi.object({
    title: Joi.string().required().trim().messages({
        'string.empty': 'Title is required'
    }),
    content: Joi.string().required().messages({
        'string.empty': 'Content is required'
    })
});

const updateBlogSchema = Joi.object({
    title: Joi.string().trim(),
    content: Joi.string()
}).min(1);

module.exports = {
    createBlogSchema,
    updateBlogSchema
};
