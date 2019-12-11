var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller')

//code for user

router.get('/index', controller.getIndex);

router.get('/search',controller.getSearch);

router.get('/profile',controller.getprofile);

router.get('/view_user:id',controller.getview_user);

//export
module.exports = router;