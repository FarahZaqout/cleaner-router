const getAll = (req, res) => {
	res.send(['user1', 'user2', 'user3', 'user4']);
};

const getById = (req, res) => {
	res.json({ name: 'farah', id: 1 });
};

module.exports = { getAll, getById };
