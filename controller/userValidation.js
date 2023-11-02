const joi = require("joi");

module.exports={
    addUser: joi.object().keys({
        id: joi.number().required(),
        name: joi.string().required(),
    }),
    deleteUser: joi.object().keys({
        id: joi.number()
    }),
    updatedUser: joi.object().keys({
        id: joi.number().required(),
        name: joi.string().required(),
    }),
}