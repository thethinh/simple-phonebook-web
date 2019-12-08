var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller')

//code for user

router.get('/index', controller.getIndex);

router.get('/search',controller.getSearch);


//export
module.exports = router;