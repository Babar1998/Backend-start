const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")
const student = sequelize.define('student',{
    rollNo: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    fatherName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cgpa: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
},{
    timestamps: true,
    paranoid: true,
})

module.exports = student;