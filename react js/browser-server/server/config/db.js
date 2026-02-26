const mongoose = require("mongoose");

const connect = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/productdb");
        console.log("Connected to MongoDB");

    }catch(err){
        console.log("Error connecting to MongoDB", err);
    }
}

exports.connect = connect;