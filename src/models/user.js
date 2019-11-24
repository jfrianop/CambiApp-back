'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      email: {
        type: DataTypes.STRING,
        noEmpty: true,
      },
      password: {
        type: DataTypes.STRING,
        noEmpty: true
      }
    },
    {
      tableName: 'users',
      timestamps: true,
      underscore: true,
      defaultScope: {
        attributes: { exclude: ['password'] }
      },
    }
  );

  User.associate = function (db) {
    db.User.hasMany(db.Item, { as: 'Items' });
    db.User.hasMany(db.Review, { as: 'Reviews', foreignKey: 'receiver_id' });
    db.User.belongsToMany(db.Swap, { as: 'Swaps', through: 'users_swaps' });
    db.User.belongsToMany(db.Item, { as: 'LikedItems', through: 'interested_liked' });
  }

  return User;
}
