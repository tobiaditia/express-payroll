const {Sequelize} = require('sequelize')

const data = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    pool_max: process.env.POOL_MAX,
    pool_min: process.env.POOL_MIN,
    pool_acquire: process.env.POOL_ACQUIRE,
    pool_idle: process.env.POOL_IDLE,
}

const { database, user, password, host, dialect, pool_max, pool_min, pool_acquire, pool_idle } = data

const db = new Sequelize(
    database,
    user,
    password,
    {
        host: host,
        dialect: dialect,
        operatorsAliases: false,

        pool: {
            max: parseInt(pool_max),
            min: parseInt(pool_min),
            acquire: pool_acquire,
            idle: pool_idle
        }
    }
)

module.exports = db