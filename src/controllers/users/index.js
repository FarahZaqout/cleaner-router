const router = require('express').Router();

const { getAll, getById } = require('./getUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

router
	.route('/users')
	.get(getAll)
	.post(createUser);

router
	.route('/users/:id')
	.get(getById)
	.put(updateUser)
	.delete(deleteUser);

module.exports = router;
