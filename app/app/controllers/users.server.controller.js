/**
	This is the controller responsible for all 
	actions associated with the 'User' in the database.
	
	NB: Remember to import the model that is created
**/

exports.list = function(req,res,next){
	var users = ["John","James","Jan","Jannie"];
	//remember to use methods such as .json()...
	res.send(users);

};
