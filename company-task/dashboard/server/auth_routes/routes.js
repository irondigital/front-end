const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth_middleware");
const Task = require("../model/task");
const { register, login } = require("../auth_controller/control");

// auth routes FIRST
router.post("/register", register);
router.post("/login", login);

// create
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userid: req.user.id,
  });

  res.json(task);
});

// get all
router.get("/", auth, async (req, res) => {
  const task = await Task.find({
    userid: req.user.id,
  });

  res.json(task);
});

// get single LAST
router.get("/:id", auth, async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    userid: req.user.id,
  });

  res.json(task);
});

// update
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: req.params.id,
      userid: req.user.id,
    },
    req.body,
    { new: true }
  );

  res.json(task);
});

// delete
router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    userid: req.user.id,
  });

  res.json({
    message: "Deleted",
  });
});

module.exports = router;