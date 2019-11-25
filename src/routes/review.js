'use strict';

const router = require('express').Router();
const review = require('../controllers/review');
const { auth } = require('../utils/middlewares');

router.get('/users/:id/reviews', auth, review.list);
router.post('/users/:id/reviews', auth, review.create);

module.exports = router;
