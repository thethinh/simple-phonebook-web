var express = require('express');
var router = express.Router();
var multer  = require('multer')

var controller = require('../controllers/user.controller')
var upload = multer({ dest: './public/img/imgAvata'})

//code for user

router.get('/index', controller.getIndex);

router.get('/search',controller.getSearch);

router.get('/profile',controller.getprofile);

router.get('/view_user:id',controller.getview_user);

router.get('/addAvata',controller.getaddAvata);

router.post('/addAvata',upload.single('avata'),controller.postaddAvata);

router.get('/logout',controller.getLogout);

//export
module.exports = router;