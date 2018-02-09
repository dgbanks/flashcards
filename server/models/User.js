const mongoose = require('mongoose');
const { Schema } = mongoose; // mongoose enforces schema because mongoDB doesn't care
const { deckSchema } = require('./Deck');

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  decks: [deckSchema]
});

mongoose.model('users', userSchema);

// require statements not needed for mongoose stuff
