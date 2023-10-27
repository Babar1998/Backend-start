var express = require('express');
var router = express.Router();

/* GET users listing. */


function users(req, res, next) {
    res.send('My Name is Babar Azam`');
  }


module.exports = users;
