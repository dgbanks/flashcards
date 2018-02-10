const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  favoriteDecks: [Schema.Types.ObjectId]
});

mongoose.model('users', userSchema);

// require statements not needed for mongoose stuff
