const joi = require("joi");

module.exports={
    addTeacher: joi.object().keys({
        specialization: joi.string().required(),
        userID: joi.number().required(),
    }),
    deleteTeacher: joi.object().keys({
        teacherId: joi.number(),
    }),
    updatedTeacher: joi.object().keys({
        teacherId: joi.number().required(),
        specialization: joi.string(),
    }),
}