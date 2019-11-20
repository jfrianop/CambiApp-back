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
        type: DataTypes.ARRAY(DataTypes.DOUBLE),
        noEmpty: true
      },
      pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
    },
    {
      tableName: 'ingredients',
      timestamps: true,
      underscore: true,
    }
  );

  return Item;
}
