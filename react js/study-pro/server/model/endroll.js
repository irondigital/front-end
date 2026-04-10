const mongoose = require("mongoose");

const Endroll = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:String,require:true},
    course:{type:String,require:true},
    message:{type:String,require:true}

})  
const Studentendroll = mongoose.model("Studentsdata",Endroll);
module.exports = Studentendroll;