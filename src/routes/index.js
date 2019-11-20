'use strict';

const user = require('./user');
const item = require('./item')

function router(app) {
  app.use(item);
  app.use(user);
};

module.exports = router;
