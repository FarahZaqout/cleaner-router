const v1Router = require('express').Router();
const v2Router = require('express').Router();
const postsRouter = require('./posts');
const usersRouter = require('./users');

// we can keep repeating this for erros and other controllers.
v1Router.use(postsRouter);
v1Router.use(usersRouter);

// second version of our API
v2Router.use(postsRouter);
v2Router.use(usersRouter);

module.exports = { v1Router, v2Router };
