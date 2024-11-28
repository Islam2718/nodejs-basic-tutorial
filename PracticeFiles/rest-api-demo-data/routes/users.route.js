const { getAllUsers, createUser, updateUser, getUserById, deleteUserById } = require('../controllers/users.controller');

const router = require('express').Router();


router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);

module.exports = router;