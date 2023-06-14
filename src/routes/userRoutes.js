const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const { createUserValidation } = require('../middlewares/createUserValidation');
const validateJWT = require('../controllers/validateJWT');

router.get('/:id', validateJWT, userController.findByPk);
router.get('/', validateJWT, userController.findAll);
router.post('/', createUserValidation, userController.create);

module.exports = router;