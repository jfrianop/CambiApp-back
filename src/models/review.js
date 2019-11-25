'use strict';

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'review',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      score: {
        type: DataTypes.INTEGER,
        noEmpty: true,
      },
      comment: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'reviews',
      timestamps: true,
    }
  );

  Review.associate = function (db) {
    db.Review.belongsTo(db.User, { as: 'Receiver', foreignKey: 'receiver_id' });
    db.Review.belongsTo(db.User, { as: 'Creator', foreignKey: 'creator_id' });
  }

  return Review;
}