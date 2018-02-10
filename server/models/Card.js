const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  front: String,
  back: String,
  _deck: { type: Schema.Types.ObjectId, ref: 'Deck' }
});

mongoose.model('cards', cardSchema);
