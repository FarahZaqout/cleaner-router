const postUser = (req, res) => {
	console.log('user posted successfully');
	res.json({ message: 'success' });
};

module.exports = postUser;
