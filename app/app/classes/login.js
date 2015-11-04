

function User(){
/**
		 @private

		These are private variables that should not be accessed directly by the
		application.

*/
	var __username=null,
		__password=null;
}
/**
	Function gets the current username and returns it to the caller.
	This is the method that should be used to access the __username.
*/
User.prototype.getUsername = function(){
	return this.__username;
}
/**
	Function that sets the __username to username.
	This is the method that should be used to change __username.
*/
User.prototype.setUsername = function(username){
	this.__username = username;
}
/**
	Function that get the __password of the object.
	This is the method that should be used to access __password.
*/
User.prototype.getPassword = function(){
	return this.__password;
}
/**
	Function that is used to set __password of the object.
	This is the method the should be used to change the __password.
*/
User.prototype.setPassword = function(password){
	this.__password=password;
}
/**
	This is the verify function that is called when a user tries to login
	This function verifies the user. If false the user is told that his login
	details were false or else the user proceeds
*/
User.prototype.verify = function(){

}

module.exports = User;
