var express = require("express");
var router = express.Router();
var userService = require("../service/userService");
var userValidation = require("./userValidation")

// Callback Functions

/* GET users listing. */
function usersController(req, res, next) {
  res.send(userService.getUser());
}

function addUserController(req, res, next) {
  try {
    const {error, value} = userValidation.addUser.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const data = userService.addUser(value);
    return res.send(data);
  }
  } catch (error) {
    res.send(error);
  }
  
}

function updatedUserController(req, res, next) {
  try {
    const {error, value} = userValidation.updatedUser.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const userId = req.params.id;
    const updateUserData = req.body;
    const updated = userService.updatedUser(userId, updateUserData, value);
    res.send(updated);
    
  }
  } catch (error) {
    res.send(error);
  }  
}

function deleteUserController(req, res, next) {
  try {
    const {error, value} = userValidation.deleteUser.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const userId = req.params.id;
    const deleted = userService.deleteUser(userId, value);
    res.send(deleted);
  }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { usersController, addUserController, updatedUserController, deleteUserController };
