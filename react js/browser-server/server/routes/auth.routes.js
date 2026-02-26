const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../models/user");
const authMiddleware = require("../middleware/auth.middleware");
const User = require("../models/user") 


const router = express.Router();

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  const { name,email, password } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    email,
    password: hashedPassword
  });

  res.json({ message: "User registered successfully" });
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

/* ================= Create ================= */

router.post("/user", async (req, res) => {
  const { productname, price, description } = req.body;

  try {
    const newUser = new User({
      productname,
      price,
      description
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
});

/* ================= Read all users ================= */

router.get("/user", async (req,res)=>{
  try{
    const users = await User.find();
    res.json(users);
    // console.log(users);
  }catch(err){
    res.status(500).json({ message: "Error fetching users", error: err.message });

  }
})

/* ================= UPDATE  ================= */
  /* ================= GET SINGLE USER ================= */
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});

router.put("/user/:id", async (req, res) => {
  const { productname, price, description } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { productname, price, description },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully", user: updatedUser });
  
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
});


/* ================= DELETE ================= */

router.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
});

/* ================= PROTECTED ================= */
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected data",
    user: req.user
  });
});

module.exports = router; // ✅ THIS IS VERY IMPORTANT