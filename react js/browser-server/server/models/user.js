const mongoose = require("mongoose");

const addschema = new mongoose.Schema({
    productname: String,
    price: Number,
    description: String
})

module.exports = mongoose.model("Add", addschema);