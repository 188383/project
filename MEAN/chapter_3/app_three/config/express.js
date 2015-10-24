var config = require('./config');
	express = require('express');
	morgan = require('morgan');
	compress = require('compression');
	bodyParser = require('body-parser');
	methodOverride = require('method-override');
	session = require('express-session');
/*
	express set up file
	This is where are extra modules are plugged into the app
*/
module.exports = function(){
	var app = express();
		
	//Check the development environment to apply
	
	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	}else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}
	
	//modules to use
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialzed: true,
		resave: true,
		secret: config.sessionSecret
	}));

	//set views and view engine	
	app.set('views','./app/views');
	app.set('view engine','ejs');
	//load the required routes and add to the 'app' context
	require('../app/routes/users.server.route.js')(app);
	require('../app/routes/index.server.routes.js')(app);
	//must be below the require!
	app.use(express.static('./public'));
	
	return app;
}
