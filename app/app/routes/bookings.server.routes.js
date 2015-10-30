/**
	This file is the bookings routes. This answers all questions with regards to the 
	users. Usually used by the admin
	
	NB: This file willl be continously changing, depending on how the structure of
	the project changes
	
	dependencies: ../controllers/bookings.server.controller.js
**/

//dependency, the controller for this route
var bookings = require('../controllers/bookings.server.controller.js');

module.exports = function(app){
	app.route('/bookings').get(bookings.test);
}
