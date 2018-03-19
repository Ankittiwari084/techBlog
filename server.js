var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var models = require(__dirname+'/models/all-models');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var md5 = require('md5');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require(__dirname+'/config/config');

var admin = require(__dirname+'/route/admin');
var app  = express();

// set for cros origin
app.use(cors());
// set bodyparser middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set server side validation middlevare.
app.use(expressValidator());
app.use(express.static(__dirname + '/client/dist/'));

app.use('/admin',admin);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });


app.listen(process.env.PORT || 3000,function(){
    console.log("Server is started!");
});