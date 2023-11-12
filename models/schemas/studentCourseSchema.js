const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")
const studentCourse = sequelize.define('student_course',{
    studentId: {
        type: DataTypes.INTEGER(),
        primaryKey: false,
        references: {
            model: 'student',
            key: 'studentId'
        }
    },
    courseId: {
        type: DataTypes.INTEGER(),
        primaryKey: false,
        references: {
            model: 'course',
            key: 'courseId'
        }
    },
},{
    timestamps: true, 
    paranoid: true,
})
 
module.exports = studentCourse;