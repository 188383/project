/**
	This is the model of the data we plan to model. This file uses the
	mongoose module to create a schema for the data and then retreive the data
	as is necessary. The model is defined in terms of a schema, that is what the
	data plans to present to the view and what data the model plans to use. The plan 	 is to have an API defined for the different crud operations on the data and make them	 independent of the client

	UPDATE
	This file will contains the model defintion for the sqlite database
	using the sequelize ORM. This defines the User model
*/

/**
	This is the definition of the UserModel. This model defines the 'User' schema
	which is in essence the registered user
*/
module.exports = function(sequelize,datatypes){
	var User = sequelize.define('User',{
		id:{
			type:datatypes.INTEGER,
			primaryKey:true,
			autoIncrement:true,
			allowNull:false
		},
		email:{
			type:datatypes.STRING,
			allowNull:false,
			unique: true,
			allowNull: false,
			field:'email'
		},
		password:{
			type:datatypes.STRING,
			allowNull: false,
			field:'password'
		},
		salt:{
			type:datatypes.BIGINT,
			allowNull: false,
			field: 'salt'
		},
		confirmed:{
			type:datatypes.BOOLEAN,
			allowNull:false,
			defaultValue: false,
			field:'confirmed'
		},
		confirmationUrl:{
			type:datatypes.STRING,
			allowNull:false,
			field:'confirmationUrl'
		},
		url:{
			type:datatypes.STRING,
			defaultValue:null,
			field:'url'
		}
	},{
		freezeTableName: true,
		timestamps:true
	});

	return User;
}
