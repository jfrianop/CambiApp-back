'use strict';

const { Item } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const items = await Item.findAll();
      res.send(items);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async create(req, res) {
    try {
      const item = await Item.create(req.body);
      res.send(item);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async show(req, res) {
    try {
      const item = await Item.findByPk(req.params.id);
      res.send(item);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async update(req, res) {
    try {
      const item = await Item.findByPk(req.params.id);
      item = { ...item, ...req.body.item }
      const updatedItem = await item.save();
      res.send(updatedItem);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async destroy(req, res) {
    try {
      const item = await Item.findByPk(req.params.id);
      await item.destroy();
      res.send(item);
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
