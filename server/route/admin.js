var express = require('express');
var router = express.Router();
var md5 = require('md5');
var admin = require('../controller/admin');
router.post('/login',admin.login);

module.exports = router;