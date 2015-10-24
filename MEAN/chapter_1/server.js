
//to use https you need to have certificate\ +private key


/*var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/json"});
	response.end("{'name':'pawel'}");
}).listen(4500);

console.log("Server is running: localhost:4500");

*/

/*
	--- Connect module showing the intro to express. This is without middleware
	


var connect = require("connect");
var app = connect();
app.listen(4500);

console.log("Server is running on port 4500");

*/

//with middleware using req, res and next
/*var connect = require("connect");
var app = connect();

var logger = function(req,res,next){
	console.log(req.method,req.url);
	
	next();
};

var helloWorld = function(req,res,next){
	res.setHeader('Content-Type', 'text/plain');
	res.write('Hello World');
	res.end();
};

var goodbyeWorld = function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.write('Goodbye world');
	res.end();
};

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);
app.use(helloWorld);

app.listen(4500);

console.log("Server is running on port 4500");
*/

var describeModule = require('./hello.js');
console.log(describeModule.describe());
