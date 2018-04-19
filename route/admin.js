var express = require('express');
var router = express.Router();
var md5 = require('md5');
var admin = require('../controller/admin');
var category = require('../controller/categories');
var question = require('../controller/questions');

var VerifyToken = require('../auth/verifyToken');

router.post('/login',admin.login);
router.get('/user_data',VerifyToken.verifyToken,admin.getUserData);
router.post('/add_setting/',VerifyToken.verifyToken,admin.addSetting);
router.get('/get_setting/:page_num',VerifyToken.verifyToken,admin.getSetting);
router.get('/count_setting',VerifyToken.verifyToken,admin.getCount);

router.get('/get_setting/:id',VerifyToken.verifyToken,admin.getSingleSetting);
router.put('/update_setting/:id',VerifyToken.verifyToken,admin.updateSetting);
router.get('/delete_setting/:id',VerifyToken.verifyToken,admin.deleteSetting);
router.post('/send_email_forgot_password/',admin.sendMailForgotPassword);
router.post('/verify_token',VerifyToken.verifyToken,admin.resetPassword);
router.post('/get_old_Password',VerifyToken.verifyToken,admin.getOldPassword);
router.post('/change_password',VerifyToken.verifyToken,admin.changePassword);

// category module route.

router.post('/add_category',VerifyToken.verifyToken,category.addCategory);
router.get('/get_categories',VerifyToken.verifyToken,category.getCategories);
router.get('/delete_category/:id',VerifyToken.verifyToken,category.deleteCategory);
router.put('/edit_category/:id',VerifyToken.verifyToken,category.editCategory)

// question module route.

router.post('/add_question',VerifyToken.verifyToken,question.addQuestion);
router.get('/get_question',VerifyToken.verifyToken,question.getQuestion);
router.get('/delete_question/:id',VerifyToken.verifyToken,question.deleteQuestion);
router.put('/edit_question/:id',VerifyToken.verifyToken,question.editQuestion);


module.exports = router;