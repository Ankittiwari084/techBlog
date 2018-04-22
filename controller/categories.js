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
    getCategories:getCategories,
    getSingleCategory:getSingleCategory,
    deleteCategory:deleteCategory,
    editCategory:editCategory
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

function editCategory(req,res,next){
    categoryValidation.addCategory(req,res,function(error,response){
        if(response.error_status == true){
            return res.status(603).json({
                status:false,
                data:response,
                message:'validation error'
            });
        }
        models.Categories.findByIdAndUpdate(req.params.id,req.body).then(
            function(response){
                if(response){
                    return res.status(200).json({
                        status:true,
                        data:response,
                        message:'update sucessfuly'
                    })
                }
            }
        ).catch(function(error){
            return res.status(203).json({
                status:true,
                data:response,
                message:'data not update'
            })  
        })
    })
}

function getSingleCategory(req,res,next){
    query = {};


    for(var key in req.query){
        if(req.query[key] != ''){
            query[key] = req.query[key];
        }
         
    }   
    models.Categories.find(
        query
    ).then(function(response){
        // query run for count.
        return res.status(200).json({
            data:data,
            message:message,
            status:true
        })
        
    }).catch(function(error){
        return res.status(500).json({
            data:error,
            message:'list could not get may be server problem',
            status:false
        })
    })
}

function getCategories(req,res,next){
    query = {};

    limit = 10;
    skip_limit = 0;
    page_size = req.params.page_num;
    if(page_size != 0){
        skip_limit = (page_size * limit) -  limit; 
    }

   sort = {};

   if(req.query.order){
       sort[req.query.field] = req.query.order; 
   }
    models.Categories.find()
    .sort(sort)
    .skip(skip_limit).limit(limit).then(function(response){
        // query run for count.
        models.Categories.count().then(function(countResponse){
            if(response.length > 0){
                data = null;
                message = 'No category found';
            }
            data = response;
            message = 'category list ';
    
            return res.status(200).json({
                data:data,
                countData:countResponse,
                message:message,
                status:true
            })

        })
        
    }).catch(function(error){
        return res.status(500).json({
            data:error,
            message:'list could not get may be server problem',
            status:false
        })
    })
}

function deleteCategory(req,res,next){
    models.Categories.findByIdAndRemove(req.params.id).then(function(response){
        if(response){
            return res.status(200).json({
                status:true,
                data:response,
                message:'delete sucessfuly'
            })
        }else{
            return res.status(203).json({
                status:true,
                data:response,
                message:'data delele'
            }) 
        }
    }).catch(function(error){
        next(error);
    })
}