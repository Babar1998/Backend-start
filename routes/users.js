var express = require('express');
const users = require('../controller/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', users);

module.exports = router;
