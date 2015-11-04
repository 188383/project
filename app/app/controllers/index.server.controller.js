/**
	@author Paweł Otrębski

	This is the controller for the home page(known as the index page), which is the
	entry point for our application. This controller exclusively deals with the
	content on the home page.

	Changes will continue to appear. As the DRY implementation starts we then have
	to have many reusable components.
	This renders the index details
**/

var User = require('../classes/login');
exports.test = function(req,res,next){
	res.end('index test');
}
/**
	Distinguish between an asynch or foreign
	agent and a browser with regards to request.
	based on the request forward it to the correc controller


*/
exports.home = function(req,res){
		console.log(req.headers);
		console.log(req.query);
		res.render('index');
	res.end();
}


/**
	This export should be compacted and formed into a
	proper ReSTful API, that is front-end agnostic

exports.loginPage = function(req,res){
	//render the login page for the user
	res.render('login');
	res.end();
}

	This is the function that is invoked when the user attempts post login
	details for verification.

	This should be a class that is accesssed depending on the action that is invoked

exports.loginUser = function(req,res){
	console.log(req.body)
	res.json(req.body);
}
*/
