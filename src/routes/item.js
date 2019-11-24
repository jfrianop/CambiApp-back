'use strict';

const router = require('express').Router();
const item = require('../controllers/item');
const { auth } = require('../utils/middlewares');

router.get('/item', auth, item.list);
router.post('/item', auth, item.create);
router.get('/item/:id', auth, item.show);
router.put('/item/:id', auth, item.update);
router.delete('/item/:id', auth, item.destroy);

module.exports = router;
