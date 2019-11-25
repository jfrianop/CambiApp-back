'use strict';

const { Message } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const messages = await Message.findAll();
      res.send(messages);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async create(req, res) {
    try {
      const message = await Message.create(req.body);
      res.send(message);
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
