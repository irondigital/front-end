const mongoose = require('mongoose');

const connectdb = async ()=>{
    try{
       const connectdb = await mongoose.connect("mongodb://localhost:27017/eduprodb")
        console.log("MongoDB connected successfully");
    }catch(err){
        console.error("MongoDB connection error:", err);
    }
}
module.exports = connectdb; 