const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Upload destination folder
  },
  filename: function (req, file, cb) {
    // Unique filename using fieldname and timestamp
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

// File filter function to allow only certain image types
const fileFilter = (req, file, cb) => {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png/;
  // Check extension against regex
  const extname = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error('Error: Images Only! (JPG, JPEG, PNG)'), false);
  }
};

// Initialize Multer upload variable
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB max file size limit
  fileFilter: fileFilter,
});

module.exports = upload;
