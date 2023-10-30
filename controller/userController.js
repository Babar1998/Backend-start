var express = require("express");
var router = express.Router();
var userService = require("../service/userService");

// Callback Functions

/* GET users listing. */
function usersController(req, res) {
  res.send(userService.getUser());
}

function addUserController(req, res) {
  const data = req.body;
  res.send(userService.addUser(data));
}

module.exports = { usersController, addUserController };
