const mongoose = require("mongoose");

const model = mongoose.Schema({
    
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})

const login = mongoose.model("logindata", model);

module.exports = login;