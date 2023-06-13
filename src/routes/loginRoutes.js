const express = require('express');

const router = express.Router();
const loginController = require('../controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');


router.post('/', loginValidation, loginController.signIn);

module.exports = router;