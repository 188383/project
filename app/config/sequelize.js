/**
  This is the file with the sequelize database setup
*/

var config = require('./config'),
    Sequelize = require('sequelize');

var db = new Sequelize('database',null,null,{
  dialect:'sqlite',
  storage:'./database/database.sqlite'
});

db.User = db.import('../app/models/users.server.model');
db.UserLinks = db.import('../app/models/userlink.server.model');
module.exports = db;
