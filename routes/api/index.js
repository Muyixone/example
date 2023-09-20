const express = require('express');
const router = express.Router();
const UserRoutes = require('./user');
const userInfo = require('./userInfo');
const getAllUsers = require('./getAllUsers');

router.use('/', UserRoutes);
router.use('/users', getAllUsers);
router.use('/user', userInfo);

module.exports = router;
