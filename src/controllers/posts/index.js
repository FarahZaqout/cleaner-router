const router = require('express').Router();

const { getAllPosts, getPostById } = require('./getPosts');
const updatePost = require('./updatePost');
const deletePost = require('./deletePost');
const createPost = require('./createPost');

router
	.route('/posts')
	.get(getAllPosts)
	.post(createPost);

router
	.route('/posts/:id')
	.get(getPostById)
	.put(updatePost)
	.delete(deletePost);

module.exports = router;
