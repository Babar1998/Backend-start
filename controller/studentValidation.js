const joi = require("joi");

module.exports={
    addStudent: joi.object().keys({
        fatherName: joi.string().required(),
        address: joi.string().required(),
        semester: joi.number().required(),
        cgpa: joi.number().required(),
        userID: joi.number().required(),
    }),
    deleteStudent: joi.object().keys({
        rollNo: joi.number(),
        email: joi.string().email()
    }),
    updatedStudent: joi.object().keys({
        rollNo: joi.number().required(),
        firstName: joi.string(),
        lastName: joi.string(),
        fatherName: joi.string(),
        email: joi.string().email(),
        address: joi.string(),
    }),
}