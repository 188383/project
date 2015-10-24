/**
	This file handles all the routing in the application.
	Here you handle all CRUD operations depending on calling method etc.
	
	NB You must connect to the appropriate controller
	remember to change actions appropriately and consider making the module much less
	congested
*/

//note use a name that is representative of the controller 
var users = require('../controllers/users.server.controller.js');

//export the routing mechanism 
module.exports = function(app){
	app.route('/users').get(users.list).post(users.list);
};
