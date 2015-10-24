/**
* First express js routes fiel
*/


module.exports = function(app) {
var index = require('../controllers/index.server.controller');
app.get('/', index.render);
//registering another route and the action take when the route is part of the request
app.get('/resource',index.resource);
};

