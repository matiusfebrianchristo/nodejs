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

try{
    sequelize.authenticate()
    console.log("Success Authenticate")

} catch ( error ) {
    console.log(error.message)
}

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.students = require('./studentModels')(sequelize, DataTypes)
db.sequelize.sync({ force: false })
.then ( () => {
    console.log("re-sync db")
})


module.exports = db