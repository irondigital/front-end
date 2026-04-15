const mongoose = require("mongoose");

const data = mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
        
    },
    content:{
        type:String,
        require:true
    }
});
const dashboard = mongoose.model('dashboard',data);
module.exports = dashboard;