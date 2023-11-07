const user = require("../models/schemas/userSchema");
const teacher = require("../models/schemas/teacherSchema");
const student = require("../models/schemas/studentSchema");
const sequelize = require("../common/dbconnection");


user.hasOne(teacher, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})
teacher.belongsTo(user, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})

user.hasOne(student, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})
student.belongsTo(user, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})

const models = sequelize.models;

console.log(models);
const db = {}
db.sequelize = sequelize;
module.exports = {sequelize, models};