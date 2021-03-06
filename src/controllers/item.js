'use strict';

const { Item } = require('../db');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = {
  async list(req, res) {
    try {
      const items = await Item.findAll({
        where: {
          OwnerId: {
            [Op.ne]: parseInt(res.locals.user.id),
          }
        }
      });
      res.send(items);
    } catch (error) {
      console.log(error);
      res.status(403).send({ error });
    }
  },
  async create(req, res) {
    try {
      const item = await Item.create(req.body);
      item.setOwner(res.locals.user.id);
      const items = await Item.findAll({
        where: {
          OwnerId: {
            [Op.ne]: parseInt(res.locals.user.id),
          }
        }
      });
      res.send(items);
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
