var express = require('express');
var router = express.Router();
var models = require('../models/all-models');
module.exports = {
    addCategory:addCategory
}

function addCategory(req,res,callback){
    var data = [];
    req.checkBody('name','Name field is missing.').notEmpty();
    req.checkBody('is_publish','Is publish field is missing.').notEmpty();

    req.getValidationResult().then(function(result){
        if(!result.isEmpty()){
            data.error = result.array();
            data.error_status = true;
            callback(true,data);
        }else{
            data.error = null;
            data.error_status = false;
            callback(false,data);
        }
    })
    
}