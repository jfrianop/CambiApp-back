'use strict';

const router = require('express').Router();
const item = require('../controllers/item');
const { auth } = require('../utils/middlewares');

router.get('/items', auth, item.list);
router.post('/items', auth, item.create);
router.get('/items/:id', auth, item.show);
router.put('/items/:id', auth, item.update);
router.delete('/items/:id', auth, item.destroy);

module.exports = router;
