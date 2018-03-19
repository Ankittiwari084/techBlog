var express = require('express');
var router = express.Router();
var models = require('../models/all-models');
var md5 = require('md5');
var adminValidation = require('../Validation/admin');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');
var VerifyToken = require('../auth/verifyToken');
module.exports = {
    login:login,
    getUserData:getUserData
}


function login(req,res,next){

    // make rule for server side validation.
    adminValidation.login(req,function(responce){
        // if data validation is fail.
        if(responce.error_status == true){
            return res.status(603).json({
                status:false,
                data:responce,
                message:'validation error'
            })
        }else{
                models.User.find({

                    email:req.body.email,

                    password:md5(req.body.password)

                }).select({
                    "password": 0
                })
                .then(function(responce){
                    
                if(responce.length > 0){

                    // create a jwt token for validating right user.

                    var token = jwt.sign({id:responce[0]._id},config.secret,{expiresIn: 84400})
                    //responce[0].token = token;
                    responce.push({'token':token});
                    return res.status(200).json({
                        status:'success',
                        data:responce,
                        message:'user found'
                    })
                }else{
                    return res.status(202).json({
                        status:'status',
                        data:'NULL',
                        message:'No record found'
                    })
                }
            }).catch(function(err){
                return next(err);
            });
        }        
    });
}

function getUserData(req,res,next){
    
    models.User.find({
            _id:req.query.id,
        }).select({
            "password": 0
        }).then(function(responce){
        if(responce.length > 0){
            return res.status(200).json({
                status:'success',
                data:responce,
                message:'user found'
            })
        }else{
            return res.status(202).json({
                status:'status',
                data:'NULL',
                message:'No record found'
            })
        }
    }).catch(function(err){
        return next(err);
    });
}