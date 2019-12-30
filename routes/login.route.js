var express = require('express');
var router = express.Router();
var controller = require('../controllers/login.controller')
var validate = require('../validate/subscribe.validate');

router.get('/login',controller.getLogin);

router.post('/login',controller.postLogin);

router.get('/subscribe',controller.getSubscribe);

router.post('/subScribe', controller.postSubscribe);

module.exports = router