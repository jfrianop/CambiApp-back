'use strict';

const user = require('./user');
const item = require('./item');
const swap = require('./swap');
const message = require('./message');
const review = require('./review');

function router(app) {
  app.use(user);
  app.use(item);
  app.use(swap);
  app.use(message);
  app.use(review);
};

module.exports = router;
