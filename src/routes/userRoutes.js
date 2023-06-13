const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const { validatePostUser } = require('../middlewares/createUserValidation')

router.post('/', validatePostUser, userController.create);

module.exports = router;