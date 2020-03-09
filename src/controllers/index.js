const router = require('express').Router();
const postsRouter = require('./posts');
const usersRouter = require('./users');

// we can keep repeating this for erros and other controllers.
router.use(postsRouter);
router.use(usersRouter);

module.exports = router;
