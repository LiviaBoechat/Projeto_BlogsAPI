const express = require('express');

const router = express.Router();
const blogPostsRoutes = require('../controllers/blogPostsController');
const validateJWT = require('../middlewares/validateJWT');
const { createPostValidation } = require('../middlewares/createPostValidation');

router.post('/', validateJWT, createPostValidation, blogPostsRoutes.create);

module.exports = router;