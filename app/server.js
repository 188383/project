//Set the glabal environment variable, this defaults to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
	Load configuration files for the mongoose ODM and express framework
*/
var sequelize = require('./config/sequelize'),
	express = require('./config/express');

/**
	set up the variables for db and express

	var db = mongoose();
	var app = express();
	app.listen(4500);
	module.exports = app
*/
var db = sequelize;
var app = express();
db.sync({force:true}).then(function(){
		console.log('done');
		app.listen(4500);

	});

console.log("server started");
//Remember to export the app
module.exports = app
