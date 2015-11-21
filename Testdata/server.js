var crypto = require('crypto');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database',null,null, {
  dialect: 'sqlite',

  // SQLite only
  storage: './database.sqlite'
});

var hashsum = crypto.createHash('sha1');

var User = sequelize.define('user', {
  id:{
  	type:Sequelize.STRING,
  	primaryKey:true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.belongsTo(User,{as:'Partner'});

var sync = User.sync({force:true}).then(function(){
	hashsum.update('adam');
	var hashedName = hashsum.digest('hex');
	var adam = User.create({id:hashedName,firstName:'adam',lastName:'man'}).then(function(adam){
		hashsum = crypto.createHash('sha1');
	hashsum.update('eve');
	hashedName = hashsum.digest('hex');
	var eve = User.create({id:hashedName,firstName:'eve',lastName:'woman',PartnerId:adam.id}).then(function(eve){
		adam.PartnerId = eve.id;
		adam.save();
	});
	});
	
});
