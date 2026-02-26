const jwt = require("jsonwebtoken");

// This middleware protects routes
module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  // If token missing
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};