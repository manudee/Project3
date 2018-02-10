var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({


    username: {
        type: String,
        required: true,
        unique: true
    },

    password : {
        type: String,
        required: true

    },

    role: {
        type: String,
        required: true,
        default: 'U'//U for user and M for Manager
    }


});

UserSchema.methods.comparePassword = function(password) {
  return (password=== this.password);
};

var user = mongoose.model("user",UserSchema);

module.exports = user;