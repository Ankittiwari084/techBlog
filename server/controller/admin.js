var express = require('express');
var router = express.Router();
var models = require('../models/all-models');
var md5 = require('md5');

module.exports = {
    login:login
}


function login(req,res,next){
    models.User.find({
            email:req.body.email,
            password:md5(req.body.password)
        }).then(function(responce){
            console.log(responce);
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