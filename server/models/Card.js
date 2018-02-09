const mongoose = require('mongoose');
const { Schema } = mongoose;

export const cardSchema = new Schema({
  front: String,
  back: String,
  _deck: { type: Schema.Types.ObjectId, ref: 'Deck' }
});
