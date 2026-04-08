const mongoose = require("mongoose");

const connect =  mongoose.connect("mongodb://localhost:27017/crud3")
.then(res=>console.log("connected"))
.catch(err=>console.log("not connected"));

module.exports = connect;