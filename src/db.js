'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWROD,
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {
  Sequelize,
  sequelize,
};

db.Item = db.sequelize.import(
  'item',
  require('./models/item')
);

db.User = db.sequelize.import(
  'user',
  require('./models/user')
);

db.Swap = db.sequelize.import(
  'swap',
  require('./models/swap')
);

db.Message = db.sequelize.import(
  'message',
  require('./models/message')
);

db.Review = db.sequelize.import(
  'review',
  require('./models/review')
);

db.Category = db.sequelize.import(
  'category',
  require('./models/category')
);


Object.keys(db).forEach(modelName => {
  if (db[modelName] && db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
