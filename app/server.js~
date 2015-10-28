//Set the glabal environment variable, this defaults to development 
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
	Load configuration files for the mongoose ODM and express framework
*/
var mongoose = require('./config/mongoose'),
	express = require('./config/express');
	
/**
	set up the variables for db and express
	
	var db = mongoose();
	var app = express();
	app.listen(4500);
	module.exports = app
*/

var app = express();
app.listen(4500);
//Remember to export the app
module.exports = app
