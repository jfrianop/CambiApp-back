'use strict';

const { Review } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const reviews = await Review.findAll();
      res.send(reviews);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async create(req, res) {
    try {
      const review = await Review.create(req.body);
      res.send(review);
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
