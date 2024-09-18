const joi = require('joi')

const schemaUsuario = joi.object({
    nome: joi.string().min(3).max(50).required().messages({
        'any.required': 'O campo senha é obrigatório!',
        'string.min': 'O campo nome deve ter no mínimo 3 letras!',
        'string.max': 'O campo nome deve ter no maxímo 50 letras!'
    }),
    email: joi.string().email().required().messages({
        'string.base': 'O campo email deve ser uma string!',
        'string.email': 'O campo email,deve ter um formato válido.',
        'any.required': 'O campo email é obrigatório!'
    }),
    cpf: joi.number().required().messages({
        'number.base': 'O cpf deve conter apenas números!',
        'any.required': 'O cpf é obrigatório!'
    }),
    senha: joi.string().min(6)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
        .required().messages({
            'any.required': 'O campo senha é obrigatório.',
            'string.min': 'O campo senha deve ter no mínimo 6 dígitos.',
            'string.pattern.base': 'O campo senha deve ter ser formado por números,letras e caracteres especiais.'

        })
})

module.exports = {
    schemaUsuario
}