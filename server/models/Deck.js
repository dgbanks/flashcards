const mongoose = require('mongoose');
const { Schema } = mongoose;
const { cardSchema } = require('./Card');

const deckSchema = new Schema({
  title: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  cards: [cardSchema]
});

mongoose.model('decks', deckSchema);
