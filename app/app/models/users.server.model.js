/**
	This is the model of the data we plan to model. This file uses the 
	mongoose module to create a schema for the data and then retreive the data 
	as is necessary. The model is defined in terms of a schema, that is what the 
	data plans to present to the view and what data the model plans to use. The plan 	 is to have an API defined for the different crud operations on the data and make them	 independent of the client
	
*/

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
/** Define the schema of the users object. All files that are defined as 
	models have the same signiture funtion
**/
var UserSchema = new Schema({
	"name":String,
	"surname":String,
	"identity":String,
	"username":String,
	"password":String,
	"address":Object,
	"rooms":Array,
	"calendar":Object,
});

/**export the schema, so that other parts of the application can make use of it
*/
mongoose.model('User',UserSchema);

