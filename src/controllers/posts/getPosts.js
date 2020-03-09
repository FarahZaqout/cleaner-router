const getAllPosts = (req, res) => {
	console.log(req.url);
	res.json(['post1', 'post2', 'post3']);
};

const getPostById = (req, res) => {
	console.log(req.url);
	res.json(['post1']);
};

module.exports = { getAllPosts, getPostById };
