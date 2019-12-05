var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller')

//code for user
router.get('/login',controller.getLogin);

//export
module.exports = router;