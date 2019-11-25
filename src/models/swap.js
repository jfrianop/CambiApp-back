'use strict';

module.exports = (sequelize, DataTypes) => {
  const Swap = sequelize.define(
    'swap',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      status: {
        type: DataTypes.INTEGER,
        noEmpty: true,
      },
    },
    {
      tableName: 'swaps',
      timestamps: true,
    }
  );

  Swap.associate = function (db) {
    db.Swap.belongsToMany(db.Item, { as: 'Items', through: 'items_swaps' });
    db.Swap.belongsToMany(db.User, { as: 'Users', through: 'users_swaps' });
    db.Swap.hasMany(db.Message, { as: 'Messages' });
  }

  return Swap;
}
