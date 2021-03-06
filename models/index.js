var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/my_heroku_app");

// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      "mongodb://localhost/twilioChat_app" );

var User = require('./users.js');
var Chat = require('./chat.js');
var Message = require('./message.js');

module.exports.User = User;
module.exports.Chat = Chat;
module.exports.Message = Message;