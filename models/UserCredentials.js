var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({


    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true

    },

    role: {
        type: String,
        default: 'U'//U for user and M for Manager
    }


});




UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    console.log("Comparing Password");
    console.log(password);
    console.log(password === this.password);
    bcrypt.compare(password, this.password, (err, isMatch) => {
        console.log("Matched " + isMatch)
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  console.log(" I AM IN SAVE");
  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) {
      return next();
    }


  return bcrypt.genSalt((saltError, salt) => {
      console.log("AFTER SAVE HOOK");
    if (saltError)  return next(saltError); 

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
         console.log("in HASH");
      if (hashError) { return next(hashError); }
       console.log(hash);
      // replace a password string with hash value
      user.password = hash;
      console.log(user.password);
      return next();
    });
  });
});


var user = mongoose.model("user", UserSchema);

module.exports = user;