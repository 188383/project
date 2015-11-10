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

	app.route('/home').get(function(req,res,next){
		res.render('index');
		res.end();
	});

	app.route('/search').get(function(req,res,next){
		var users = require('../classes/dummy');
		res.send(req.query);
	});

	app.route('/about').get(function(req,res,next){
		res.render('about');
		res.end();
	});

	app.route('/signup').get(function(req,res,next){
		res.render('signup');
		res.end();
	});
//find the userid paramater and insert into the file
//	app.param('userid',index.userById);
}
