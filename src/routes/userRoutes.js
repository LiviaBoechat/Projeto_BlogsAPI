const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const { createUserValidation } = require('../middlewares/createUserValidation')
const validateJWT = require('../auth/validateJWT')


router.get('/',  validateJWT, userController.findAll);
router.post('/', createUserValidation, userController.create);

module.exports = router;