//adding what kind of environment we are working with.
//The morgan package allows us to log certain aspects of dev
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');

var app = express();
app.listen(4500);
//export the app to user
module.exports = app;

console.log('Running on port');
