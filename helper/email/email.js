var nodemailer = require('nodemailer');
var config = require('../../config/config');
module.exports = {
    sendEmail:sendEmail
}

function sendEmail(to,from,subject,text = '',html='',attachment = '' ,callback){
    let transporter = getTransport();
    var callData = [];
    let mailOptions = {
        from: from, // sender address
        to: getTo(to), // list of receivers
        subject: subject, // Subject line
        text: text, 
        html: html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           // callData.error = error;
            console.log(error);
            callback(error,null);
        }
        //callData.sucess = info.messageId;
        callback(null,info.messageId);
    });
}

function getTransport(){
    return nodemailer.createTransport({
            host: config.email.host,
            port: config.email.port,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.email.auth.user, // your email user  name 
                pass: config.email.auth.pass // your email password
            }
        });
}

// this function help to create to adress.
function getTo(toData){
    console.log(toData);
    return toData
}