const courses = require("../data/courses.data");
const users = require("../data/users.data");
const messages = require("../data/message.data");

exports.dashboard = (req, res) => {
  res.render("admin/dashboard", {
    totalCourses: courses.length,
    totalUsers: users.length,
    totalMessages: messages.length
  });
};

// const User = require("../models/User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.send("User already exists");

  const newUser = new User({ name, email, password, isAdmin: true });
  await newUser.save();

  res.send("Admin created!");
};


exports.users = (req, res) => {
  res.render("admin/users", { users });
};
