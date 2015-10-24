/**This is used for bootstrapping the application
	That is , it is combining the routes and the controller
	
	Everything that is needed by express is handled in this file
*/

var	config = require('./config'); 
	express = require('express');
	morgan = require('morgan');
	compress = require('compression');
	bodyParser = require('body-parser');
	methodOverride = require('method-override');
	session = require('express-session');

module.exports = function(){
	var app = express(); //instantiate express
	
	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev','stream'));
	}else if(process.env.NODE_ENV === 'production'){
		app.use(compress);
	}
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.use(session({
		saveUninitialized: true,
		resave : true,
		secret: config.sessionSecret
	}));
	//the opposite of app.get, this sets a variable's value
	app.set('views','./app/views');
	//this sets the templating engine
	app.set('view engine','ejs');
	//load routes
	require('../app/routes/index.server.routes.js')(app);
	//expresses static machine for serving static content i.e imgs css etc 
	app.use(express.static('./public'));
	
	return app;
};
