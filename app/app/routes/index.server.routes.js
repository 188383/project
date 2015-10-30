/**
	This is the file that controls the index page. The main page for the application
	This page is a bit dodgy because it is actually based on the MEAN book. 
	This page could change depending on the demands of the app.
	
	NB this file might even just be deleted 
	
	dependencies: ../controllers/index.server.controller.js
**/

var index = require('../controllers/index.server.controller.js');

module.exports = function(app){
	app.route('/').get(index.test);
}
