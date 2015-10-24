/**
*	This is the first express js controller
*/

exports.render = function(req,res){
	//read cookie if possible
	if(req.session.lastVisit){
		console.log(req.session.lastVisit);
	}
	//change last visit
	req.session.lastVisit = new Date();
	
	//Here we render a simple ejs template that fills the title variable in index.ejs
	res.render('index',{title:'Hello World, I be noding'});
};
/*
	This is another controller built specially for this application
*/
exports.resource = function(req,res){
	var variables = {title:'Hello World, I be resourcing'};
	res.render('index',variables);
}
