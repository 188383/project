/**
	same as other routing files. Note this file could be changing drastically 
	depending on what is happening during application development
**/

var rooms = require('../controllers/rooms.server.controller.js');

module.exports = function(app){
	app.route('/rooms').get(rooms.test);
}
