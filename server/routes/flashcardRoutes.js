const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Deck = mongoose.model('decks');

module.exports = app => {
  app.post('/api/decks', requireLogin, (request, response) => {
    const { title, _cards, topic, userFavorites } = request.body;
    const deck = new Deck({
      title,
      _cards,
      userFavorites,
      _user: request.user.id,
      topic
    });

    await deck.save();

  });
};
