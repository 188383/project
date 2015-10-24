/**
 * This example is the simple express application with no route specified
 * @author: Paweł Otrębski

//require express
var express = require('express');
instantiate express
var app = express();
//define a route
app.use('/',function(req,res){
	res.send('Hello World');
});

app.listen(4500);

console.log('Server running http://localhost:4500');

module.exports = app;
*/

/**
 * 	This is the next example which taken directly
 		from the site of express

var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello World')
});

var server = app.listen(5000,function(){
	var host = server.address().adress;
	var port = server.address().port;
})
*/
