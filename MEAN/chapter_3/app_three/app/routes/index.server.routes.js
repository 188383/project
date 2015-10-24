/*
	define the roots and what controllers to fire
*/
var users = require('../../app/controllers/users.server.controller');
module.exports = function(app){
	var index = require('../controllers/index.server.controller');
	app.route('/users')
		.post(users.create)
		.get(users.list);
};
