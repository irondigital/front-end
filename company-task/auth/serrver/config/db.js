const mongoose = require("mongoose");


const connectdb = mongoose.connect("mongodb://127.0.0.1:27017/mydatabase23")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

module.exports = connectdb;