const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const {postUserValidation, putUserValidation, findUserValidation} = require('../middlewares/users')

router.get('', userController.getUsers)
router.get('/:id', findUserValidation, userController.getUsersById)
router.post('', postUserValidation, userController.postUsers)
router.put('/:id', putUserValidation, userController.putUsers)
router.delete('/:id', findUserValidation, userController.deleteUsers)

module.exports = router