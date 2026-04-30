const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { verifyToken } = require('../middleware/authMiddleware');
const { adminAuth } = require('../middleware/adminMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Protected Admin Routes with Image Upload
router.post(
  '/',
  verifyToken,
  adminAuth,
  upload.single('image'), // Handle single file upload with field name 'image'
  createProduct
);

router.put(
  '/:id',
  verifyToken,
  adminAuth,
  upload.single('image'),
  updateProduct
);

router.delete('/:id', verifyToken, adminAuth, deleteProduct);

module.exports = router;
