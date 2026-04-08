const express= require("express");

const router = express.Router();
const Student = require("../model/data");

router.get("/", (req, res) => {
    res.send("API Working");
});

router.post("/studentdata",(req,res)=>{
  const  {name,email}  =req.body;
  try{
    const data = new Student({
        name,
        email
    })
    data.save();
    res.status(201).json({message:"data inserted"})
  }catch(err){
    console.log(err)
    res.status(500).json({message:"server error"})
  }
})

router.get("/studentdata", async(req,res)=>{
    try{
        const data = await Student.find();
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

module.exports = router