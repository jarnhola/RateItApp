var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
var queries = require('./queries');
var rest = require('./app/rest_api');
var server = express();

//Use bodyparser middleware
server.use(bodyParser.json());

//this function is executed for every request!
server.use(function(req,res,next){
    //Store queries object to request
    req.queries = queries;
    //Pass to next middleware
    next();
});

//Middleware for user data
server.use('/data',rest);

//Use static paths for different files
server.use(express.static(path.join(__dirname, '/views')));
server.use("/angular",express.static(path.join(__dirname, '/angular')));
server.use("/app",express.static(path.join(__dirname, '/app')));
server.use("/css",express.static(path.join(__dirname, '/css')));
server.use("/images",express.static(path.join(__dirname, '/images')));
server.use("/controllers",express.static(path.join(__dirname, '/controllers')));
server.use("/factory",express.static(path.join(__dirname, '/factory')));

server.listen(3000);