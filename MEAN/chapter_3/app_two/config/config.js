//management of configuration files being loaded
//this file just loads the current environment which is named in env which is just
//a common export module
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
