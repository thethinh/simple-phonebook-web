var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller')

router.get('/', controller.getIndex)

router.get('/search',controller.getSearch);

router.get('/create-user', controller.getCreate_user);

router.get('/:id', controller.getView_user);

router.post('/create-user', controller.postCreate_user);

module.exports = router;