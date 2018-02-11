const User = require('mongoose').model('user');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  username: 'username',
  password: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {

  console.log(username);
  console.log(password);


  const userData = {
    username: username.trim(),
    password: password.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
