var express = require('express');
var assert = require('assert');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes/routes');

var db = mongoose.connect('mongodb://localhost:27017/freshcal');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',routes);

app.listen(3000);

console.log("server listening at 3000");