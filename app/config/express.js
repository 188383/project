/**

	NB Start commenting all the code that is in use. keep it up to date
		This is important as the code will be part of the evaluation

	This file imports all the required libraries
	and sets up express so as to bring all the seperate elements together.
	required libraries that should be started with:

	require('./config') <- so that the environment can be determined
	require('express')<- for the express framework
	require('mongoose')<-used for the ODM for mongodb
	require('morgan')<-for logging tools and developer tools
	require('compression')<-for production phase
	require('body-parser')<- research
	require('method-override')
	require('express-session')

	add libraries as required
*/

var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
//	session = require('express-session'),
	session = require('client-sessions'),
	cookieparser = require('cookie-parser'),
	serveStatic = require('serve-static'),
	User = require('./sequelize').User;

/**
	Set up the express application:
		Load the enviroment that is applicable
		use and/or set modules that will be used with application
		add the routing mechanisms
*/

module.exports = function(){
	//load the express app
	var app = express();
	// morgan for development puropes, compress for production
	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	}else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	//modules to use regardless of the environment set above
	app.use(session({
  cookieName: 'user_authentication',
  secret: 'random_string_goes_here',
  duration: 1000*60*2,
  activeDuration:1000*60*2
	}));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	/*
		create a session and then verify the user
	*/
	app.use(function(req,res,next){
		if(req.session){
			console.log(req.session);
		}
		next();
	});

	//set up templating engine
	app.set('views','./app/views');
	app.set('view engine','ejs');

	//set the routing mechanism, this is modular so that angular can easily plug in angular
	//note this calls the route context and passes instance of app into it.
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/bookings.server.routes.js')(app);
	require('../app/routes/rooms.server.routes.js')(app);
	require('../app/routes/profile.server.routes.js')(app);
	//set the static content here, this is under routes for performance purposes
	app.use(express.static('./public'));

	return app;
};
