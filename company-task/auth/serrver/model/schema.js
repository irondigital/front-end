const mongoose = require("mongoose");

const model = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})

const models = mongoose.model("userdata", model);

module.exports = models;