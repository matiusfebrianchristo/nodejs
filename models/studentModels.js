module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define('students', {
        nisn: {
            type: DataTypes.INTEGER,
            allowedNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            // allowedNull: true
        },
        class: {
            type: DataTypes.STRING,
            // allowedNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true
    })

    return Students
}