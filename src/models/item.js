'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'item',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        type: DataTypes.STRING,
        noEmpty: true
      },
      description: {
        type: DataTypes.STRING,
        noEmpty: true
      },
      location: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE)
      },
      pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
    },
    {
      tableName: 'items',
      timestamps: true,
    }
  );

  Item.associate = function (db) {
    db.Item.belongsTo(db.User, { as: 'Owner' });
    db.Item.belongsToMany(db.User, { as: 'InterestedUsers', through: 'interested_liked' });
    db.Item.belongsToMany(db.Category, { as: 'Categories', through: 'item_categories' });
    db.Item.belongsToMany(db.Swap, { as: 'Swaps', through: 'items_swaps' });
  }

  return Item;
}