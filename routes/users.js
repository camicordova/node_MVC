var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  userController.user_showall(req, res ,next);
});
router.post('/', function(req, res, next){
  userController.user_create(req, res, next);
});

module.exports = router;
