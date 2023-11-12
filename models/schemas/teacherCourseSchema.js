const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")
const teacherCourse = sequelize.define('teacher_course',{
    teacherId: {
        type: DataTypes.INTEGER(),
        primaryKey: false,
        references: {
            model: 'teacher',
            key: 'teacherId'
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
  
module.exports = teacherCourse;