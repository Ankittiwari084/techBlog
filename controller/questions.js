var express = require('express');
var router = express.Router();
var models = require('../models/all-models');
var md5 = require('md5');
var waterfall = require('async-waterfall');
var questionValidation = require('../Validation/question');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');
var VerifyToken = require('../auth/verifyToken');
var commonFunction = require('../helper/common');

module.exports = {
    addQuestion:addQuestion,
    getQuestion:getQuestion,
    deleteQuestion:deleteQuestion,
    editQuestion:editQuestion
}

/**
 * Name: addQuestion
 * Description: this function refer to add functionality.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addQuestion(req,res,next){
    // call function for validation.
    questionValidation.questionValidation(req,res,function(error,validationError){
        if(error == true){
            // validation fail it return 
            return commonFunction.jsonResponse(req,res,603,false,validationError.error,'Validation Error');
        }
        models.Question.create(req.body).then(function(response){
            if(response){
                // if get response it will return with data.
                return commonFunction.jsonResponse(req,res,200,true,response,'question added successfully');
            }
        }).catch(function(error){
            // if question did not saved then return.
            return commonFunction.jsonResponse(req,res,500,false,error,'question did not add may be server problem');
        })
    });
}

/**
 * Name: editQuestion
 * Description: this function refer to edit functionality.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function editQuestion(req,res,next){
    // call function for validation.
    questionValidation.questionValidation(req,res,function(error,validationError){
        if(error == true){
            // validation fail it return 
            return commonFunction.jsonResponse(req,res,603,false,validationError.error,'Validation Error');
        }
        models.Question.findByIdAndUpdate(req.params.id,req.body).then(function(response){
            if(response){
                // return response after edit or not edit question.
                return commonFunction.jsonResponse(req,res,200,false,response,'Question updated successfully');
                
            }

        }).catch(function(error){
            return commonFunction.jsonResponse(req,res,500,false,error,'Server error') 
        })
    });
}

/**
 * Name: getQuestion
 * Description: this function refer to get all question functionality.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getQuestion(req,res,next){
    query = {};
    for(var key in req.query){
        if(req.query[key] != ''){
            query[key] = req.query[key];
        }
         
    }
    models.Question.find(
        query
    ).then(function(response){

        return commonFunction.jsonResponse(req,res,200,true,response,'question list') 
        
    }).catch(function(error){
        return commonFunction.jsonResponse(req,res,500,true,error,'server error on question ') 
        
    })
}

/**
 * Name: deleteQuestion
 * Description: this function refer to delete functionality.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function deleteQuestion(req,res,next){
    
}