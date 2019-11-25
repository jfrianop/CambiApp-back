'use strict';

const router = require('express').Router();
const message = require('../controllers/message');
const { auth } = require('../utils/middlewares');

router.get('/swaps/:id/messages', auth, message.list);
router.post('/swaps/:id/messages', auth, message.create);

module.exports = router;
