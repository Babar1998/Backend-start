const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")

const course = sequelize.define('course',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    courseTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseCreditHours: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true,
    paranoid: true,
})

module.exports = course;