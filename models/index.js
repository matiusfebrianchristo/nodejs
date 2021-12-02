const config = require ('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log("Success Authenticate")
})
.catch(err => {
    console.log(err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.student = require('./studentModels')(sequelize, DataTypes)

db.sequelize.sync({ force: false })

