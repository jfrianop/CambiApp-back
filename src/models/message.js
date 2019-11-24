'use strict';

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'message',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      body: {
        type: DataTypes.STRING,
        noEmpty: true,
      },
    },
    {
      tableName: 'messages',
      timestamps: true,
      underscore: true,
    }
  );

  Message.associate = function (db) {
    db.Message.belongsTo(db.User, { as: 'Sender' });
    db.Message.belongsTo(db.User, { as: 'Swap' });
  }

  return Message;
}
