const express = require('express');
const router = express.Router();
const { createBlog, updateBlog, deleteBlog, getMyBlogs } = require('../controllers/blogController');
const { protect } = require('../middleware/auth');

router.route('/')
    .post(protect, createBlog);

router.get('/me', protect, getMyBlogs);

router.route('/:id')
    .put(protect, updateBlog)
    .delete(protect, deleteBlog);

module.exports = router;
