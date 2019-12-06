var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller')

//code for user
router.get('/login',controller.getLogin);

router.get('/index',controller.getIndex);

router.get('/search',controller.getSearch);

router.post('/login',controller.postLogin);
//export
module.exports = router;