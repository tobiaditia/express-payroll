const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const response = require('../response')
const userModels = require('../models/users')
const {validationResult} = require('express-validator')

app.use(bodyParser.json())

const getUsers = async (req, res) => {
    try {
        const [data] = await userModels.getUsers()
        response.success(200, 'User data retrivied', data, res)
    } catch (error) {
        response.serverError(error, res)
    }
}

const getUsersById = async (req, res) => {
    const id = req.params.id

    try {
        const [data] = await userModels.getUsersById(id)
        response.success(200, 'User data retrivied', data, res)
    } catch (error) {
        response.serverError(error, res)
    }
}

const postUsers = async (req, res) => {

    const resultValidation = validationResult(req)
    if(resultValidation.isEmpty()){
        const {body} = req
        try {
            const [data] = await userModels.postUsers(body)
            response.success(201, 'User data created', data, res)
        } catch (error) {
            response.serverError(error, res)
        }
    }
    
    response.validate(resultValidation.array(), res)

}

const putUsers = async (req, res) => {
    const id = req.params.id

    try {
        const [data] = await userModels.putUsers(req, id)
        response.success(201, 'User data updated', data, res)
    } catch (error) {
        response.serverError(error, res)
    }
}

const deleteUsers = async (req, res) => {
    const id = req.params.id
    try {
        const [data] = await userModels.deleteUsers(id)
        response.success(200, 'User data deleted', data, res)
    } catch (error) {
        response.serverError(error, res)
    }
}

module.exports = {
    getUsers,
    getUsersById,
    postUsers,
    putUsers,
    deleteUsers
}