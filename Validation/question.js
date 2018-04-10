var express = require('express');
var router = express.Router();
var models = require('../models/all-models');

module.exports = {
    questionValidation:addEditquestion
}

function addEditquestion(req,res,callback){
    var data = [];

    if(req.method == 'PUT'){
        req.checkParams('id','id is missing').notEmpty();
    }
    req.checkBody('title','Title field is missing.').notEmpty();

    req.checkBody('option_one_title','option_one_title field is missing.').notEmpty();
    req.checkBody('option_one_value','option_one_title field is missing.').notEmpty();

    req.checkBody('option_two_title','option_two_title field is missing.').notEmpty();
    req.checkBody('option_two_value','option_two_title field is missing.').notEmpty();

    req.checkBody('option_three_title','option_three_title field is missing.').notEmpty();
    req.checkBody('option_three_value','option_three_title field is missing.').notEmpty();

    req.checkBody('option_four_title','option_four_title field is missing.').notEmpty();
    req.checkBody('option_four_value','option_four_title field is missing.').notEmpty();

    req.checkBody('correct_option','correct_option field is missing.').notEmpty();
    
    
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