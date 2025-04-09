const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/UserController');

router.post('/usuarios', createUser);
router.get('/usuarios', getUsers);

module.exports = router;