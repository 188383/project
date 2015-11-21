/**
	@author Paweł Otrębski

	This is the controller for the home page(known as the index page), which is the
	entry point for our application. This controller exclusively deals with the
	content on the home page.

	Changes will continue to appear. As the DRY implementation starts we then have
	to have many reusable components.
	This renders the index details
**/

//var User = require('../classes/login');
//This is the data that will be posted to the database

var sequelize = require('../../config/sequelize');
var fs = require('fs');
var crypto = require('crypto');
/**
	This function adds the users profile pages to
	the fs
**/


exports.home = function(req,res,next){
	/*
		Here, as in other functions we add a user authentication
		to check what data to render to the screen of the user
	*/

	res.render('index');
	res.end();
}

exports.search = function(req,res,next){
//	var users = require('../classes/dummy');
	/*
		Here we set up the page varibales depending on whether
		the user is logged in or not
	*/

	res.send();
}

exports.about = function(req,res,next){
	/*
		This is the about page and the page variables are not
		really essential here
	*/
	res.render('about');
	res.end();
}

exports.signupForm = function(req,res,next){
	res.render('signup');
	res.end();
}

/**
	Rewrite the signup so that users that register will be added to the database
	as per the requirements of the database model, that is that they are sent a
	confirmation link. that link is then 
**/

exports.signupData = function(req,res,next){
	var User = sequelize.User;
	var __email = req.body.email;
	var __password = req.body.password;
	var __salt = Date.now();
	var passWordString = __salt + __password + __salt;

	var hashsum = crypto.createHash('sha512');
	hashsum.update(passWordString);
	var digest = hashsum.digest('hex');

	var user = User.create({
		email:__email,
		password:digest,
		salt:__salt
	})
	.then(function(user){
		/*
			create user content directory
		*/
		fs.mkdir('content/'+__email,function(err){
			if(err){
				console.log(err);
				throw err;
			}else{
				console.log(user)
				res.redirect('/');
			}
		});
	}).error(function(err){
			console.log(err);
		});
}
/*
	Need to add error handling for wrong password and email
	combination.
*/
exports.login = function(req,res,next){
	var User = sequelize.User;
	var __email = req.body.email;
	var __password = req.body.password;

	User.findOne({
		where:{
			email:req.body.email
		},
		attributes:['id','email','password','salt']
	}).then(function(user){

		if(!user){
				res.redirect('/login');
		}else{
			var hashsum = crypto.createHash('sha512');
			var __salt = user.salt;
			var digestString = __salt + __password + __salt;
			hashsum.update(digestString);
			var digest = hashsum.digest('hex');

			if(user.password === digest){
					res.redirect('/home');
			}else{
				res.redirect('/login');
			}

		}
	});
}
