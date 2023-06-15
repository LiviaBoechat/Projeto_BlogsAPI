const express = require('express');

const router = express.Router();
const blogPostsController = require('../controllers/blogPostsController');
const validateJWT = require('../middlewares/validateJWT');
const { createPostValidation } = require('../middlewares/createPostValidation');

router.get('/:id', validateJWT, blogPostsController.findByPk);
router.get('/', validateJWT, blogPostsController.findAll);
router.post('/', validateJWT, createPostValidation, blogPostsController.create);

module.exports = router;