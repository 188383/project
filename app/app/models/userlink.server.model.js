module.exports = function(sequelize,DataType){
  var UserLinks = sequelize.define('userlinks',{});
  UserLinks.hasOne(sequelize.User);
}
