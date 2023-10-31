var express = require("express");
var router = express.Router();
var userService = require("../service/userService");

// Callback Functions

/* GET users listing. */
function usersController(req, res, next) {
  res.send(userService.getUser());
}

function addUserController(req, res, next) {
  const data = req.body;
  res.send(userService.addUser(data));
}

function updatedUserController(req, res, next) {
  const userId = req.params.id;
  const updateUserData = req.body;
  const updated = userService.updatedUser(userId, updateUserData);
  res.send(updated);
}

function deleteUserController(req, res, next) {
  const userId = req.params.id;
  const deleted = userService.deleteUser(userId);
  res.send(deleted);
}

module.exports = { usersController, addUserController, updatedUserController, deleteUserController };
