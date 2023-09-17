const {check} = require('express-validator')
const userModels = require('../models/users')

const postUserValidation = [
    check('email').notEmpty().isEmail(),
    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({
            min:4
        }).withMessage('Passord length min 4'),
]

const putUserValidation = [
    check('id')
        .notEmpty().withMessage('ID is required')
        .isInt().withMessage('Password must be integer')
        .custom(async value => {
            const existingData = await userModels.findByPk(value);
            if (existingData === null) {
                throw new Error('ID not valid');
            }
        }),
    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({
            min:4
        }).withMessage('Passord length min 4'),
]

const findUserValidation = [
    check('id')
        .notEmpty().withMessage('ID is required')
        .isInt().withMessage('Password must be integer')
        .custom(async value => {
            const existingData = await userModels.findByPk(value);
            if (existingData === null) {
                throw new Error('ID not valid');
            }
        }),
]

module.exports = {
    postUserValidation,
    putUserValidation,
    findUserValidation
}