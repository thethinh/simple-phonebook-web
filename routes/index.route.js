var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller')
var validate = require('../validate/index.validate');

//code for index page
router.get('/', controller.getIndex)

router.get('/search',controller.getSearch);

router.get('/create-user', controller.getCreate_user);

router.get('/:id', controller.getView_user);

//router.get('/login',controller.getLogin);

router.post('/create-user',validate.postCreate, controller.postCreate_user);

module.exports = router;