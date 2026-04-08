const mongoose = require("mongoose");

const connect = async ()=>{
    try{
       const connect = await mongoose.connect("mongodb://localhost:27017/milan")
        console.log("MongoDB connected successfully");
    }catch(err){
        console.error("MongoDB connection error:", err);
    }
}
module.exports = connect;

   