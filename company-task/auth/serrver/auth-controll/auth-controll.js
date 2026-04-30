const model = require("../model/schema");
const bcrypt = require("bcryptjs");
const generate = require("../utils/generate");

const registeruser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existuser = await model.findOne({ email });

    if (existuser) {
      return res.status(400).json({
        message: "user already exist",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await model.create({
      name,
      email,
      password: hashpassword,
    });

    res.status(201).json({
      message: "Register successful",
      user,
    });

  } catch (err) {
    res.status(500).json({
      message: "server error",
    });
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await model.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    const ismatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!ismatch) {
      return res.status(400).json({
        message: "invalid password",
      });
    }

    const token = generate(user);

    res.status(200).json({
      message: "login successfully",
      token,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  registeruser,
  loginuser,
};