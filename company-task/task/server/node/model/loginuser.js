const mongoose = require('mongoose');
const data = mongoose.Schema({
    
  email:{
    type:String,
    require:true,
 }
     , 
        password:{
        type:String,
        require:true
     }  
});
const loginusers = mongoose.model('loginuser',data);
module.exports = loginusers;