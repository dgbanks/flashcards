const mongoose = require('mongoose');
const { Schema } = mongoose;

const deckSchema = new Schema({
  title: String,
  _cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  userFavorites: { type: Number, default: 0 },
  topic: { type: String, default: null }
});

mongoose.model('decks', deckSchema);
