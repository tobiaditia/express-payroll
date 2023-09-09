const db = require('../configs/database')

const getUsers = () => {
    const sql = "SELECT * FROM users"
    return db.query(sql)
}

const getUsersById = (id) => {
    const sql = `SELECT * FROM users WHERE id=${id}`
    return db.query(sql)
}

const postUsers = (body) => {
    const sql = `INSERT INTO users (email, password) values ('${body.email}', '${body.password}')`
    return db.query(sql)
}

const putUsers = (req, id) => {
    const password = req.body.password
    const sql = `UPDATE users SET password='${password}' WHERE id=${id}`
    return db.query(sql)
}

const deleteUsers = (id) => {
    const sql = `DELETE FROM users WHERE id=${id}`
    return db.query(sql)
}

module.exports = {
    getUsers,
    getUsersById,
    postUsers,
    putUsers,
    deleteUsers
}