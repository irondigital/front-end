const express = require('express');
const router = express.Router();
const { getPublicBlogs } = require('../controllers/publicController');

router.get('/blogs', getPublicBlogs);

module.exports = router;
