const deletePost = (req, res) => {
	console.log('post deleted');
	res.json({ message: 'success' });
};

module.exports = deletePost;
