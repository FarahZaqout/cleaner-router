const createPost = (req, res) => {
	console.log('post created');
	res.json({ message: 'success' });
};

module.exports = createPost;
