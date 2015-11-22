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
var User = require('../classes/user');
/**
	This function adds the users profile pages to
	the fs
**/


exports.home = function(req,res,next){
	/*
		Here, as in other functions we add a user authentication
		to check what data to render to the screen of the user
	*/
	
	//add checking for the cookie and whether user is logged in.
	
	res.render('index',{link:"/login", name:"login",link2:"/signup",name2:"signup"});
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
	var data = {};
	if(req.user_authentication){
		data['link'] = '/logout';
		data['name'] = 'logout';
		data['link2'] = '#';
		data['name2'] = 'profile';
	}else{
		data['link'] = '/login';
		data['name'] = 'login';
		data['link2'] = '/signup';
		data['name2'] = 'signup';
	}
	
	res.render('about',data);
	res.end();
}

exports.signupForm = function(req,res,next){
	res.render('signup',{link:"/login", name:"login",link2:"/signup",name2:"signup"});
	res.end();
}

/**
	Rewrite the signup so that users that register will be added to the database
	as per the requirements of the database model, that is that they are sent a
	confirmation link. that link is then 
**/

exports.signupData = function(req,res,next){

	/*var User = sequelize.User;*/
	var __email = req.body.email;
	var __password = req.body.password;
	var user = new User(__email,__password);
	var success = user.persistUser();
	var directory
	if(success){
		res.render('index',{link:"/signup",name:"signup",link2:"/login",name2:"login"});
	}else{
		console.log(success);
		res.redirect('/login');
	}
	
	
}
/*
	Need to add error handling for wrong password and email
	combination.
*/
exports.login = function(req,res,next){
	var SUser = sequelize.User;
	var __email = req.body.email;
	var __password = req.body.password;
	var client = new User();
	var dataobject = null;
	SUser.findOne({
		where:{
			email:req.body.email
		},
		attributes:['id','email','password','salt','confirmed','url']
	}).then(function(user){
		var verified;
		if(!user){
				res.redirect('/login');
		}else{
			dataobject = user;
			client.setSalt(user.salt);
			client.setPassword(__password);
			verified = client.verifyUser(user.password);
			
		}
		if(!verified.error){
			req.user_authentication.username = dataobject.email;
			res.render('index',{link:"#",name:"profile",link2:"/logout",name2:"logout"});
		}else{
			res.json(verified);
		}
	});
}
