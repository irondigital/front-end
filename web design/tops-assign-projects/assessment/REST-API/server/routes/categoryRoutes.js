const express = require('express');
const router = express.Router();
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const { verifyToken } = require('../middleware/authMiddleware');
const { adminAuth } = require('../middleware/adminMiddleware');

// Public routes
router.get('/', getCategories);

// Protected Admin Routes
// Apply verifyToken and adminAuth middlewares sequentially
router.post('/', verifyToken, adminAuth, createCategory);
router.put('/:id', verifyToken, adminAuth, updateCategory);
router.delete('/:id', verifyToken, adminAuth, deleteCategory);

module.exports = router;
