'use strict';

const router = require('express').Router();
const swap = require('../controllers/swap');
const { auth } = require('../utils/middlewares');

router.get('/swaps', auth, swap.list);
router.get('/swaps/:id', auth, swap.show);
router.put('/swaps/:id', auth, swap.update);

module.exports = router;