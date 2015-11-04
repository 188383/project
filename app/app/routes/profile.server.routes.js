/**
	This is the file that will control the user profile routes
	
	This file could change or even be deleted depending on how the app develops
	
	dependencies: ../controllers/rooms.server.controller.js
**/
//dependency
var profile = require('../controllers/profile.server.controller.js');

module.exports = function(app){
	app.route('/profile/:name').get(profile.test);
	
	app.param('name',function(req,res,next,name){
		console.log(name);
		res.end('done');
	});
}
