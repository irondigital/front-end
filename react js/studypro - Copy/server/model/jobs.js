const mongoose = require("mongoose");

const jobdata = new mongoose.Schema({
    jobtitle:{type:String,require:true},
    location:{type:String,require:true},
    experience:{type:String,require:true},
    type:{type:String,require:true}
}) 

const jobs = mongoose.model("carrier" , jobdata);

module.exports = jobs;