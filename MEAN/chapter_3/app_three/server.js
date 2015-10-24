//set the environment the app is in
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express');
//the whole app in one little script, that NEED to be exported
var db = mongoose();
var app = express();
app.listen(4500);
module.exports = app;


