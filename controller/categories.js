var express = require('express');
var router = express.Router();
var models = require('../models/all-models');
var md5 = require('md5');
var waterfall = require('async-waterfall');
var categoryValidation = require('../Validation/category');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');
var VerifyToken = require('../auth/verifyToken');

module.exports = {
    addCategory:addCategory,
    getCategories:getCategories
}

function addCategory(req,res,next){
    categoryValidation.addCategory(req,res,function(error,validationError){
        if(error == true){
            return   res.status(603).json({
                status:false,
                data:validationError.error,
                message:'Validation Error'
            })
        }
        models.Categories.create(req.body).then(function(response){
            if(response){
                return res.status(200).json({
                    status:true,
                    data:response,
                    message:'Category added sucessfully'
                });
            }
        }).catch(function(error){
            return res.status(500).json({
                status:true,
                data:error,
                message:'Category did not add may be server problem'
            });
        })

    });
    //models.Categories
}

function getCategories(req,res,next){
    models.Categories.find().then(function(response){
        if(response.length > 0){
            data = null;
            message = 'No category found';
        }
        data = response;
        message = 'category list ';

        return res.status(200).json({
            data:data,
            message:message,
            status:true
        })
    }).catch(function(error){
        return res.status(500).json({
            data:error,
            message:'list could not get may be server problem',
            status:true
        })
    })
}