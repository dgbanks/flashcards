const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, 
  async (accessToken, refreshToken, profile, done) => { 
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
      done(null, existingUser);
    } else {
      const newUser = await new User({ 
        googleId: profile.id,
        firstName: profile.name.givenName
      }).save();
      done(null, newUser);
    }
  })
);

// passport: helper for handling auth in Express apps
// passport strategy: helper for authenticating with one specific method