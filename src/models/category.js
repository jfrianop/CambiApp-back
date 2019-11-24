'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'category',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        type: DataTypes.STRING,
        noEmpty: true,
      },
    },
    {
      tableName: 'categories',
      timestamps: true,
      underscore: true,
    }
  );

  return Category;
}
