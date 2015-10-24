/**
	This is a configuration file. This file is used to load 
	the current configuration i.e development,production etc
	
	This is to allow for more modularity
*/

module.exports = require('./env/' + process.env.NODE_ENV + '.js');
