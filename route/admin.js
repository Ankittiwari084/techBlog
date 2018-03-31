var express = require('express');
var router = express.Router();
var md5 = require('md5');
var admin = require('../controller/admin');
var VerifyToken = require('../auth/verifyToken');

router.post('/login',admin.login);
router.get('/user_data',VerifyToken.verifyToken,admin.getUserData);
router.post('/add_setting/',VerifyToken.verifyToken,admin.addSetting);
router.get('/get_setting/',VerifyToken.verifyToken,admin.getSetting);
router.get('/get_setting/:id',VerifyToken.verifyToken,admin.getSingleSetting);
router.put('/update_setting/:id',VerifyToken.verifyToken,admin.updateSetting);
router.get('/delete_setting/:id',VerifyToken.verifyToken,admin.deleteSetting);
router.post('/send_email_forgot_password/',admin.sendMailForgotPassword);
router.post('/verify_token',VerifyToken.verifyToken,admin.resetPassword);
module.exports = router;