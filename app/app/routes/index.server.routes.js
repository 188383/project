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

	app.route('/').get(function(req,res,next){
		res.redirect('/home');
		res.end();
	});

	app.route('/home')
	.get(index.home);

	app.route('/search')
	.get(index.search);

	app.route('/about')
	.get(index.about);

	app.route('/signup')
	.get(index.signupForm).post(index.signupData);

	/*add login function here*/

	app.route('/login').get(function(req,res){
		res.render('login',{});
	}).post(index.login);

	app.route('/logout').get(function(req,res){
		req.user_authentication.reset();
		res.render('index',{link:"/signup",name:"signup",link2:"/login",name2:"login"})
	});	
		
	app.route('/register/*').get(function(req,res){
			
	});

	/*app.route('/*').get(function(req,res){
		res.send('random_string');
	});*/
//find the userid paramater and insert into the file
//	app.param('userid',index.userById);
}
