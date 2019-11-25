'use strict';

const { Swap } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const swaps = await Swap.findAll();
      res.send(swaps);
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async update(req, res) {
    try {
      const swap = await Swap.findByPk(req.params.id);
      swap.status = req.params.status;
      const updatedSwap = await swap.save();
      res.send(updatedSwap);
    } catch (error) {
      res.status(403).send({ error });
    }
  }
}
