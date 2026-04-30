// Middleware to check if the logged-in user is an admin
// Note: This must be used AFTER authMiddleware (verifyToken)
const adminAuth = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    // User is an admin, proceed
    next();
  } else {
    // User is not an admin, deny access
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { adminAuth };
