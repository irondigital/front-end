const mongoose = require("mongoose");

const data = mongoose.Schema({
     name:{
        type:String,
        require:true
     },

     email:{
    type:String,
    require:true,
    unique:true
     },
     password:{
        type:String,
        require:true
     }

});
const alldata = mongoose.model('user',data);

module.exports = alldata;