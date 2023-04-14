const express = require('express');
const { createUser, getAllUsers, updateUser } = require('../Controllers/UserController');
const router = express.Router()


router.route('/create/user').post(createUser);
router.route('/get/users').get(getAllUsers)
router.route('/update/user/:id').put(updateUser)

module.exports = router;