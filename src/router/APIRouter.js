const v1Router = require('express').Router();
const v2Router = require('express').Router();
const router = require('../controllers');

v1Router.use('/api/v1', router);
v2Router.use('/api/v2', router);

module.exports = { v1Router, v2Router };
