const joi = require("joi");

module.exports={
    addUser: joi.object().keys({
        firstName: joi.string().required(),
        lastName: joi.string().optional(),
        email: joi.string().email().required(),
        password: joi.string().required(),
    }),
    deleteUser: joi.object().keys({
        id: joi.number(),
        email: joi.string().email()
    }),
    updatedUser: joi.object().keys({
        id: joi.number().required(),
        firstname: joi.string(),
        lastname: joi.string(),
        email: joi.string().email(),
        password: joi.string(),
    }),
}