/**
	This is the file that will control the user profile routes

	This file could change or even be deleted depending on how the app develops

	dependencies: ../controllers/rooms.server.controller.js

	Note that the callbacks are meant to be shifted to the controllers
	section and only be called from this point. DRY
**/
//dependency
var profile = require('../controllers/profile.server.controller.js');

module.exports = function(app){
	//list user property
	app.route('/users/:username').get(function(req,res,next){
		console.log(req.user)
		res.send('This will be the user profile' + req.user);
	});
	//log user out and destroy session
	app.route('/users/:username/logout').get(function(req,res,next){
		res.send('This will be the logout option');
	});
	//user profile editing
	app.route('/users/:username/edit_profile').get(function(req,res,next){
		res.send('This is the uri for profile editing');
	});
	//list user assets
	app.route('/users/:username/assets').get(function(req,res,next){
		res.send('This is the uri for user assets');
	});
	//list user bookings
	app.route('/users/:username/bookings').get(function(req,res,next){
		console.log(req.user);
		res.send('This is the uri for the bookings the user has');
	});
	//fix the value of the params that are in the url
	//these are dependent on values in the database
	app.param('username',function(req,res,next,user){
		var names = {'name':'give me a name','surname':'give me a surname'};
		req.user = names[user];
		next();
	});
}
