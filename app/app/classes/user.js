
var nodemailer = require('nodemailer');
var fs = require('fs');
var crypto = require('crypto');

var email,password,user,salt,confirmed,url;

function User(email,password){
/**
	The main elements that form a user
**/
	if(email!=='undefined'&&password!=='undefined'){
		this.email = email;
		this.password = password;
		this.salt = Date.now();
		
	}else{
		this.email = null;
		this.password = null;
		this.salt = null;
		
	}
	this.confirmed = null;
	this.url = null;
}



User.prototype.setEmail = function(email){
	this.email = email;
}

User.prototype.getEmail = function(){
	return this.email;
}

User.prototype.setPassword = function(password){
	this.password = password;
}

User.prototype.getPassword = function(){
	return this.password;
}

User.prototype.setSalt = function(salt){
	this.salt = salt;
}

User.prototype.getSalt = function(){
	return this.salt;
}

User.prototype.hashObject = function(data){
	var digest = null;
	var hashSum = crypto.createHash('sha512');
	hashSum.update(data);
	
	digest = hashSum.digest('hex');
	
	return digest;
}

User.prototype.persistUser = function(){
	var success = false;
	var passwordObject = this.salt+this.password+this.salt;
	var passDigest = this.hashObject(passwordObject);
	var confirmationResource = this.hashObject(this.email);
		
	var sequelize = require('../../config/sequelize');
	user = sequelize.User;
	success = user.create({
		email:this.email,
		password:passDigest,
		salt:this.salt,
		url:'/content/'+this.email,
		role:'user',
		confirmationUrl:'/register/'+confirmationResource
	},{fields:['email','password','salt','confirmed','url','confirmationUrl']})
		.then(function(){ return true;})
		.error(function(err){console.log(err);return false;});	
	return success;
}

User.prototype.createUserDirectory = function(){
	var success;
	success = fs.mkdir('./content/'+this.email,function(err){
		if(err){
			return false;
		}else{
			return true;
		}
	});
	
	return success;
}

User.prototype.setUrl = function(url){
	this.url = url;
}

User.prototype.getUrl = function(){
	return this.url;
}

User.prototype.setConfirmed = function(confirmed){
	this.confirmed = confirmed;
}

User.prototype.getConfirmed = function(){
	return this.confirmed;
}

User.prototype.verifyUser = function(hashed){
	var string = this.salt+this.password+this.salt;
	var pass = this.hashObject(string);
	if(hashed === pass){
		return {error:false};
	}else{
		return {error:true};
	}
}


module.exports = User;
