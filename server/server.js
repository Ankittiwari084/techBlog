var express = require('express');
var mongoose = require('mongoose');
var models = require('./models/all-models');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var md5 = require('md5');

var admin = require('./route/admin');
var app  = express();

// set for cros origin
app.use(cors());

// set bodyparser middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set server side validation middlevare.
app.use(expressValidator());

app.use('/admin',admin);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });


app.listen(3000,function(){
    console.log("Server is started!");
});