var nodemailer = require('nodemailer');
var config = require('../config/config');

module.exports = {
    jsonResponse:jsonResponse
}

/**
 * Name: jsonResponse
 * Description:this refer to create response in json.
 */
function jsonResponse(req,res,status_code = '', status = '', data = '', message = ''){
    return res.status(status_code).json({
        status:status,
        data:data,
        message:message
    })
}