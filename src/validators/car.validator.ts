import joi from 'joi';

export const carValidators = joi.object({
    brand: joi.string().required()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .messages({
            'string.min': 'min length must be greater than 0',
            'string.max': 'max length must be 20',
            'string.pattern.base':'brand must contain only letters'
        }),
    price: joi.number().required().integer()
        .min(0)
        .max(1000000)
        .messages({
            'number.min': 'min price must be 0',
            'number.max': 'max price must be 1000000',
            'number.integer':'Price must be an integer'
        }),

    year: joi.number().required().integer()
        .min(1990)
        .max(2026)
        .messages({
            'number.min':  'min year must be 1990',
            'number.max': 'max year must be 2026',
            'number.integer':'Year must be an integer'
        })
})
