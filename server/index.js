const express = require('express'); // common js modules, node does not have ES6

const app = express(); // express is a route handler

app.get('/', (request, response) => {
  response.send({bye: 'buddy'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//difference between put/patch: put updates all properties of something, patch does not