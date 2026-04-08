const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const schemas = mongoose.model("cruddata",schema);
module.exports = schemas; 