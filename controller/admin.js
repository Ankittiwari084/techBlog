var express = require('express');
var router = express.Router();
var models = require('../models/all-models');
var md5 = require('md5');
var waterfall = require('async-waterfall');
var adminValidation = require('../Validation/admin');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');
var VerifyToken = require('../auth/verifyToken');
var email = require('../helper/email/email');
module.exports = {
    login:login,
    getUserData:getUserData,
    addSetting:addSetting,
    getSetting:getSetting,
    getSingleSetting:getSingleSetting,
    updateSetting:updateSetting,
    deleteSetting:deleteSetting,
    sendMailForgotPassword:sendMailForgotPassword,
    resetPassword:resetPassword,
    getOldPassword:getOldPassword,
    changePassword:changePassword,
    getCount:getCount
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
                status:'error',
                data:'NULL',
                message:'No record found'
            })
        }
    }).catch(function(err){
        return next(err);
    });
}

function addSetting(req,res,next){
    adminValidation.setting(req,function(responce){
        if(responce.error_status === true){
            return res.status(603).json({
                status:false,
                data:responce,
                message:'validation error'
            })
        }
       
        models.Setting.create(req.body).then(function(responce){
            return res.status(200).json({
                status:'success',
                data:responce,
                message:'data created'
            })
        }).then(function(err){
            return next(err);
        })
    });
}

function getCount(req,res,next){
    models.Setting.count().then(function(response){
        console.log(response);
        return res.status(200).json({
            status:'success',
            data:response,
            message:'count sucessfull'
        })
    }).catch(function(err){
        return res.status(500).json({
            status:false,
            data:err,
            message:'count not found'
        })
    })
}

function getSetting(req,res,next){
    limit = 10;
    skip_limit = 0;
    page_size = req.params.page_num;
    if(page_size != 0){
        skip_limit = (page_size * limit) -  limit; 
    }

    models.Setting.find().skip(skip_limit).limit(limit).then(function(response){
        return res.status(200).json({
            status:'success',
            data:response,
            message:'list sucessfull'
        })
    }).catch(function(err){
        return next(err);
    })
}

function getSingleSetting(req,res,next){
    
    models.Setting.findOne({
        _id:req.params.id,
    }).then(function(response){
        return res.status(200).json({
            status:'success',
            data:response,
            message:'list sucessfull'
        })
    }).catch(function(err){
        return next(err);
    })
}

function updateSetting(req,res,next){
    
    adminValidation.setting(req,function(response){
        if(response.error_status == true){
            res.status(603).json({
                status:false,
                data:responce,
                message:'validation error'
            });
        }
        models.Setting.findByIdAndUpdate(req.params.id,req.body).then(function(response){
            if(response){
                return res.status(200).json({
                    status:true,
                    data:response,
                    message:'update sucessfuly'
                })
            }else{
                return res.status(203).json({
                    status:true,
                    data:response,
                    message:'data not update'
                })  
            }            
        }).catch(function(err){
            next(err);
        })
    })
}

function deleteSetting(req,res,next){
    models.Setting.findByIdAndRemove(req.params.id).then(function(response){
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

function sendMailForgotPassword(req,res,next){
    var error = [];
    waterfall([
        // this function for validate
        function(callback){
            adminValidation.forgotPassword(req,function(response){
                if(response.error_status === true){
                    error.data = response.error
                    error.message = "validation error";
                    error.status = 402;
                    callback(error,null);
                }else{
                    validationStatus = true;
                    callback(null,validationStatus);
                }
            });
        },
        // this function for get check email from database.
        function(validationStatus,callback){
            models.User.find({
                email:req.body.email,
            }).select({
                "password": 0
            }).then(function(response){
                if(response.length > 0){
                    callback(null,response);
                }else{
                    error.message = "The email does not exist.";
                    error.status = 403;
                    callback(error,null);
                }                
            }).catch(function(error){
                error.message = "database problem";
                error.status = 500;
                callback(error,null);
            })
        },
        // this funciton for send email 
        function(response,callback){
            var time  = Math.floor(Date.now() / 1000) + (60 * 60) // one hour
            var token = jwt.sign({id:response[0]._id},config.secret,{expiresIn: 1800});
            html = 'Your url is<html><body>';
            html += '<b><a href="http://localhost:4200/admin/forgot_password/'+token+'">Please click this link</a></b>';

            html += '</body></html>';
            email.sendEmail(req.body.email,'ankittiwari084@gmail.com','Reset Password Request','test',html,null,function(error,success){
                if(error){
                    error.data = error;
                    error.message = "Email Not send";
                    error.status = 404;
                    callback(error,null)
                }                
                callback(null,success)
            });
        }
    ],function(err,response){
        if(err){
            return res.status(err.status).json({
                status:true,
                data:err.data,
                message:err.message
            }) 
        }
        return res.status(200).json({
            status:true,
            data:response,
            message:'good'
        }) 
    })

}

function resetPassword(req,res,next){
    models.User.findByIdAndUpdate(req.userId,{password:md5(req.body.confirm_password)})
    .select({
        "password": 0
    }).then(function(response){
        if(response){
            return res.status(200).json({
                status:true,
                data:response,
                message:'Password reset sucessfully please login with new password'
            })
        }
    })
    .catch(function(error){
        return res.status(204).json({
            status:false,
            data:error,
            message:'Password not update may be server problem'
        })
    })
}

function getOldPassword(req,res,next){
    models.User.find({
        password:md5(req.body.old_password),
        _id:req.userId
    }).select({
        password:1
    }).then(function(response){
        if(response.length > 0){
            return res.status(200).json({
                status:true,
                data:response[0].password,
                message:'password match'
            })
        }else{
            return res.status(200).json({
                status:false,
                data:null,
                message:'password does not match'
            })
        }
    }).catch(function(error){
        return res.status(500).json({
            status:false,
            data:null,
            message:'server error'
        })
    })
}

function changePassword(req,res,next){
    adminValidation.changePassword(req,res,function(error,validationError){
        if(error == true){
                res.status(603).json({
                    status:false,
                    data:validationError.error,
                    message:'validation error'
                });
        }else{
            models.User.findByIdAndUpdate(req.userId,{password:md5(req.body.new_password)})
            .select({password:0}).then(function(response){
                
                if(response){
                    return res.status(200).json({
                        status:true,
                        data:response,
                        message:'Password has been updated'
                    })
                }
            }).catch(function(err){
                return res.status(500).json({
                    status:false,
                    data:null,
                    message:'Password has not updated'
                })
            })
        }
    });
}