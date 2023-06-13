const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');
const validateJWT = require('../auth/validateJWT');
const { createCategoryValidation } = require('../middlewares/createCategoryValidation');

router.post('/', validateJWT, createCategoryValidation, categoryController.create);

module.exports = router;