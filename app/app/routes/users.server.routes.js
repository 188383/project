/**
	This file handles all the routing in the application.
	Here you handle all CRUD operations depending on calling method etc.
	
	NB You must connect to the appropriate controller
	remember to change actions appropriately and consider making the module much less
	congested
*/

//note use a name that is representative of the controller 
var users = require('../controllers/users.server.controller.js');

//export the routing mechanism 
module.exports = function(app){
	/*This method is here just to test the routing mechanism is working*/
	app.route('/users').get(users.list).post(users.list);
	
	/* Control user login, if the user posts a get request for the login, then
		The login page is displayed, alternatively if a post request is made, this is 
		assumed to contain the details of the user that is attempting to log in
	*/ 
	app.route('/login')
		.get(/*serve the login page*/)
		.post(/*authenticate user and enter session*/);
		
	/*
		The Log out route, this is used to terminate the current session of the user.
		Destroy the session key and delete the cookie
		
	*/
	app.route('/logout').get().post();
	/*
		User must first register before he/she can make any bookings. 
		The user either requests the registrations form using a GET 
		or uses POST to pass the data for verification by the server
		consider how the AJAX version of this website will react when 
		being filled in by a new user and user names and suggestions 
	*/
	
	app.route('/register')
		.get(/*serve the registration page*/)
		.post(/*verify details and post link for confirmation*/);
	
	/*
		The User attempts to make a booking, using either a GET request that routes 
		to the booking form. This form is then filled in partly by the system with the details
		of landlord to whom the message must go to and partly by the user him/herself when they 
		make the booking
		
		alternatively 
		The user posts details of the booking, that is the user lets the server 
		verify the contents of the booking, the legitimacy of the request and 
		the dates the user has decided to use. This will in turn pass the user on to the owner who
		will then verify the booking and make sure the user has confirmed the booking via deposit.
	*/	
	app.route('/book/:userId')
		.get(/*fill out booking form*/)
		.post(/*Post the booking request to the server for prior confirmation*/);
	
	/*	
		and update function that will allow users to update personal details.
		The idea is to change the personal details of the user when needed. Such
		as contact number, email etc	
	*/
	app.route('/user_update/:userId');
};
