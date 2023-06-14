const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');
const validateJWT = require('../controllers/validateJWT');
const { createCategoryValidation } = require('../middlewares/createCategoryValidation');

router.get('/', validateJWT, categoryController.findAll);
router.post('/', validateJWT, createCategoryValidation, categoryController.create);

module.exports = router;