const express = require('express');

const router = express.Router();
const blogPostsController = require('../controllers/blogPostsController');
const validateJWT = require('../middlewares/validateJWT');
const { createPostValidation } = require('../middlewares/createPostValidation');
const { updatePostValidation } = require('../middlewares/updatePostValidation');

router.get('/search', validateJWT, blogPostsController.findByQuery);
router.delete('/:id', validateJWT, blogPostsController.destroy);
router.put('/:id', validateJWT, updatePostValidation, blogPostsController.update);
router.get('/:id', validateJWT, blogPostsController.findByPk);
router.get('/', validateJWT, blogPostsController.findAll);
router.post('/', validateJWT, createPostValidation, blogPostsController.create);

module.exports = router;