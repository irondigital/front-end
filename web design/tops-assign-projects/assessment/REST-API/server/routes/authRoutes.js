const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/authController');

// Routes for authentication
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

module.exports = router;
