/**
	This is the file for the configuration of mongoose ODM
	The file sets up all the variables required to connect to mongo 
	and efficiently handle data in CRUD operations
	
	
*/

//require the following libraries and extensions

var config = require('./config'),
	mongoose = require('mongoose');
	
/**
	Here is where the db instance is set up with all the informations needed 
	to connected to the datasource. This is done using the monogoose ODM 
	which simplifies CRUD operations.

	The below is an example connecting to some db in config and connecting to the model
	that will describe the data	
	
	module.exports = function(){
	var db = mongoose.connect(config.db);
	require(../app/models/users.server.models.js);
	
	return db;
}
*/


