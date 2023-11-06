const joi = require("joi");

module.exports={
    addStudent: joi.object().keys({
        firstName: joi.string().required(),
        lastName: joi.string().optional(),
        fatherName: joi.string().required(),
        email: joi.string().email().required(),
        address: joi.string().required(),
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