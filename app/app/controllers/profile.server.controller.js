/**
	This is the controller for a given users profile.
	What is the user profile? All the user details are part of the 
	profile 
	
	:first_name, last_name, address etc etc 
	
	The profile is basically all the personal data of the user. This does not include the
	business offers that the user is in possession of. This is the function of 
	'bookings' controller.
**/

exports.test = function(req,res,next){
	next('profile test');
}
