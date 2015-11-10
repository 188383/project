/**
	This file handles all the routing in the application.
	Here you handle all CRUD operations depending on calling method etc.

	NB You must connect to the appropriate controller
	remember to change actions appropriately and consider making the module much less
	congested


	This will be used to by the admins, who will be able to search users.
	delete users, suspend users. etc etc
*/

//note use a name that is representative of the controller
var users = require('../controllers/users.server.controller.js');

//export the routing mechanism
module.exports = function(app){

	/**
		Users route. The base route for the users is empty, which
		should redirect users to the login page or help generate a login page if
		there is no user credentials or no session that was generated, otherwise try and
		and get the session key and check whether the user is logged in.
	**/

};
