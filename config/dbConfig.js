module.exports = {
    HOST: 'localhost',
    DB: 'nodejs',
    USER: 'root',
    PASSWORD: '',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 50000,
        idle: 10000
    }

}