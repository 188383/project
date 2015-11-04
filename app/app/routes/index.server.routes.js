/**
	This is the file that controls the index page. The main page for the application
	This page is a bit dodgy because it is actually based on the MEAN book.
	This page could change depending on the demands of the app.

	NB this file might even just be deleted

	1) For now this index file controls all the views that are generated for usual
		user functionality
	dependencies: ../controllers/index.server.controller.js
**/

var index = require('../controllers/index.server.controller.js');

module.exports = function(app){
	app.route('/').get(function(req,res,next){res.redirect('/home');});
	/**handle the route that specifies the home resource
		The routes that have functions declared in the callback section should be changed
		such that the callbacks should be kept in the controller function
	*/
	app.route('/home').get(index.home);
	//handle the route that specifies the login resource
	app.route('/login')
		.get(index.home)
		.post(function(req,res){
				console.log(req.headers);
				console.log(req.body);
				res.end();
		});
	//handle the route for loggin a user out and destroying the session
	//app.route('/logout').get('log out and redirect to the home page');
	//handle the route that specifies the register resource
	app.route('/register').get(function(req,res,next){'Return the registration form'});
	//handle the route that specifies the about resource
	app.route('/about').get(function(req,res,next){res.end('the about page')});
}
