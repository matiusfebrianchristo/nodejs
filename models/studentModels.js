
module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student', {
        nisn: {
            type: DataTypes.INTEGER,
            allowedNull: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        class: {
            type: DataTypes.STRING,
            allowedNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true
    })

    return students
}