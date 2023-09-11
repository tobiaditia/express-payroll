const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const response = require('../response')
const userModels = require('../models/users')
const {validationResult} = require('express-validator')

app.use(bodyParser.json())

const getUsers = async (req, res) => {
    try {
        const data = await userModels.findAll()
        response.success(200, 'User data retrivied', data, res)
    } catch (error) {
        response.serverError(error, res)
    }
}

const getUsersById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await userModels.findByPk(id)
        response.success(200, 'User data retrivied', data, res)
    } catch (error) {
        response.serverError(error, res)
    }
}

const postUsers = async (req, res) => {

    const {body} = req
    try {
        const data = await userModels.create({
            'email': body.email,
            'password': body.password
        })
        response.success(201, 'User data created', data, res)
    } catch (error) {
        response.validate(error, res)
    }
    
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