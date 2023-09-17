const db = require('../configs/database')
const Sequalize = require('sequelize')
const {DataTypes} = Sequalize

const User = db.define("users", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: {
                args:true,
                msg:"harus berupa email"
            },
            notNull: {
                args:true,
                msg:"tidak boleh kosong"
            },
            notEmpty: {
                args:true,
                msg:"tidak boleh kosong"
            },
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User