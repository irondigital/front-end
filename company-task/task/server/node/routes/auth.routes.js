const express = require("express");
const router = express.Router();
const users = require("../model/user");
const loginusers = require("../model/loginuser");
const hashpassword = require("bcrypt");
const authenticate = require("../middleware/authenticate");

// for register
router.post("/register",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const hash = await hashpassword.hash(password,6);
        const data = await users.create({name,email,password:hash});
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

// for read 
router.get("/register",async(req,res)=>{
  
  try{
    const data = await users.find(req.body);
    res.status(200).json({message:"success", data})
  }catch(err){
    console.log("not added");
    res.status(500).json({message:"server error"})
  }
});

router.put("/register",async(req,res)=>{
    try{
        const data = await users.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

router.delete("/register",async(req,res)=>{
    try{
        const data = await users.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }   
});




const login = require("../model/loginuser");

// router.post("/login",async(req,res)=>{
//     try{
//         const {email,password} = req.body;
//         const data = await login.create({email,password});
//         res.status(200).json({message:"success", data})
//     }catch(err){
//         console.log("not added");
//         res.status(500).json({message:"server error"})
//     }
// });
router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await users.findOne({email});  
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const isMatch = await hashpassword.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const token = jwt.sign({id:user._id},process.env.jwt_secret_key,{expiresIn:"1h"});
        res.status(200).json({message:"success", token})
    }
    catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

router.get("/login",async(req,res)=>{
    try{
        const data = await login.find(req.body);
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

router.put("/login/:id",async(req,res)=>{
    try{
        const data = await login.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }   
});

router.delete("/login/:id",async(req,res)=>{
    try{
        const data = await login.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }   
});

// dashboard

const dashboard = require("../model/dashboard");

router.post("/dashboard",async(req,res)=>{  
    try{
        const {title,content} = req.body;
        const data = await dashboard.create({title,content});
        res.status(200).json({message:"success", data})
    }
    catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

router.get("/dashboard",async(req,res)=>{
    try{
        const data = await dashboard.find(req.body);
        res.status(200).json({message:"success", data})
      
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
    
});

router.get("/dashboard/:id",async(req,res)=>{
    try{
        const data = await dashboard.findById(req.params.id);
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

router.put("/dashboard/:id",async(req,res)=>{
    try{
        const data = await dashboard.findByIdAndUpdate(req.params.id,req.body,{new:true});


        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }
});

router.delete("/dashboard/:id",async(req,res)=>{
    try{
        const data = await dashboard.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"success", data})
    }catch(err){
        console.log("not added");
        res.status(500).json({message:"server error"})
    }   
});



 module.exports = router;