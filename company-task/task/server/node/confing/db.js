const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/newuserdata')
    .then((res)=>console.log("sucess"))
    .catch((err)=>console.log("not connected"));

module.exports = db;