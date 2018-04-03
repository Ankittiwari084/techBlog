var express = require('express');
var router = express.Router();
var models = require('../models/all-models');

module.exports = {
    login:login,
    setting:setting,
    forgotPassword:forgotPassword,
    changePassword:changePassword
}

// this function responsbel for validation only
function login(req,res){
    var data = [];
    req.checkBody('email', 'Emplty email ').notEmpty();
    req.checkBody('email', 'fill valid email ').isEmail();
    req.checkBody('password', 'Emplty password').notEmpty();

    // check validation is empty
    req.getValidationResult().then(function(result){
        if(!result.isEmpty()){
            
            data.error = result.array();
            data.error_status = true;
            res(data);
        }else{
            data.error = null;
            data.error_status = false;
            res(data);
            
        }
    })
}

function setting(req,res){
    var data = [];
    req.checkBody('setting_label','Empty Setting Label').notEmpty();    
    req.getValidationResult().then(function(result){
        if(!result.isEmpty()){
            data.error = result.array();
            data.error_status = true;
            res(data);
        }else{
            data.error = null;
            data.error_status = false;
            res(data);
        }
    })
}

function forgotPassword(req,res){
    var data = [];
    req.checkBody('email', 'Emplty email ').notEmpty();
    req.checkBody('email', 'fill valid email ').isEmail();

    // check validation is empty
    req.getValidationResult().then(function(result){
        if(!result.isEmpty()){
            
            data.error = result.array();
            data.error_status = true;
            res(data);
        }else{
            data.error = null;
            data.error_status = false;
            res(data);
            
        }
    })
    
}
function changePassword(req,res,callback){
    var data = [];
    req.checkBody('new_password','new password is missinf').notEmpty();
    req.checkBody('confirm_password',' confirm password is missing').notEmpty();
    req.getValidationResult().then(function(result){
        if(!result.isEmpty()){
            data.error = result.array();
            data.error_status = true;
            
            callback(true,data);
        }else{
            data.error = null;
            data.error_status = false;
            callback(null,data);
        }
    })
}