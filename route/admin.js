var express = require('express');
var router = express.Router();
var md5 = require('md5');
var admin = require('../controller/admin');
var VerifyToken = require('../auth/verifyToken');

router.post('/login',admin.login);
router.get('/user_data',VerifyToken.verifyToken,admin.getUserData);

module.exports = router;