const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express App
const app = express();

// Global Middleware
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Route Imports
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// Root Welcome Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the E-Commerce API!' });
});

// Serve Static Files (Uploaded Images)
// This makes the /uploads directory accessible via HTTP
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Distinguish Multer errors
  if (err.message && err.message.includes('Images Only')) {
    return res.status(400).json({ message: err.message });
  }
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ message: 'File is too large. Max size is 2MB.' });
  }

  res.status(500).json({ 
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? null : err.message 
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
