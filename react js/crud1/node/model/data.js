const mongoose = require("mongoose");

const Students = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true}
})

const Studentdata = mongoose.model("datas",Students)

module.exports = Studentdata;