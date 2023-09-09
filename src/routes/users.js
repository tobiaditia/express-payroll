const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const {body} = require('express-validator')

router.get('', userController.getUsers)
router.get('/:id', userController.getUsersById)
router.post('', body('email').notEmpty().isEmail(), userController.postUsers)
router.put('/:id', userController.putUsers)
router.delete('/:id', userController.deleteUsers)

module.exports = router