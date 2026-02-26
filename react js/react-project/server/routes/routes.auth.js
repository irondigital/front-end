const express = require('express');
const bcrypt = require("bcryptjs")

const router = express.Router();
const Course = require('../model/student-course');
const admindata = require('../model/admin-data')
const Students = require("../model/endroll")
const jobsre = require("../model/jobs");

// example route

router.post("/addcourses",(req,res)=>{
        const { title, desc,duration,level,price,image,link } = req.body;

       try {
        
        const newCourse = new Course({
          
            title,
            desc,
            duration,
            level,
            price,
            image,
            link
        }); 
        newCourse.save();
        res.status(201).json({ message: "Course added successfully", course: newCourse });
         } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });

       }
        

})

router.get("/addcourses", async (req,res)=>{
    try{
        const data = await Course.find();
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.get("/addcourses/:id", async (req,res)=>{
    try{
        const data = await Course.findById(req.params.id);
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.put("/addcourses/:id", async (req,res)=>{
    try{
        const data = await Course.findByIdAndUpdate( 
            req.params.id,      // which document
      req.body,           // what to update
      { new: true } )
    res.status(200).json(data)
    }catch(err){
      console.log(err)
      res.status(500).json({message:"server error"})
    }
    
})

router.delete("/addcourses/:id",async (req,res)=>{
    try{
        const data = await Course.findByIdAndDelete(
            req.params.id,
            

        )
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.post("/addadmin", async (req,res)=>{
 
     const {name,email,password,role} = req.body;
     const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const newAdmin = new admindata({
            name,
            email,
            password:hashedPassword,
            role
        });
        newAdmin.save();
        res.status(201).json({message:"successfully added"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server err"})
    }
   }
   
)

router.get("/addadmin", async (req,res)=>{
    try{
        const data  = await admindata.find();
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.get("/addadmin/:id",async(req,res)=>{
try{

    const data = await admindata.findById(req.params.id);
    res.status(200).json(data)
}catch(err){
    console.log(err)
    res.status(500).json({message:"server error"})
}
})

router.put("/addadmin/:id", async (req, res) => {
  try {
    const data = await admindata.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({
      message: "Admin updated successfully",
      data,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

 router.delete("/addadmin/:id", async (req, res) => {
    
  try {
    const data = await admindata.findByIdAndDelete(req.params.id);
    console.log(data)
    if (!data) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({
      message: "Admin deleted successfully",
      data,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/Studentdata",async(req,res )=>{
    const {name,email,phone,course,message} = req.body
try{
         const students = new Students({
        name,
        email,
        phone,
        course,
        message
    })
     await students.save();
    res.status(200).json({message:"data inserted"})

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.get("/Studentdata",async (req,res)=>{
    try{
        const data = await Students.find()
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.delete("/Studentdata/:id",async (req,res)=>{
    try{
        const data = await Students.findByIdAndDelete(req.params.id)
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.post("/carrier", async(req,res)=>{
   const { jobtitle,location,experience,type} = req.body;

   try{
    const jobs =  new jobsre ({
        jobtitle,
        location,
        experience,
        type
    })
     await jobs.save();
    res.status(200).json({message:"data inserted"})

   } catch(err){
     console.log(err)
        res.status(500).json({message:"server error"})
    
   }
})

router.get("/carrier", async(req,res)=>{
    try{
        const data = await jobsre.find();
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.get("/carrier/:id",async (req,res)=>{
    try{
        const data = await jobsre.findById(req.params.id)
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})

router.put("/carrier/:id", async(req,res)=>{
    try{
        const data = await jobsre.findByIdAndUpdate(req.params.id,req.body, {new:true})
    res.status(200).json(data);
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }

})

router.delete("/carrier/:id", async(req,res)=>{
    try{
        const data = await jobsre.findByIdAndDelete(req.params.id)
    res.status(200).json(data);
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
})


module.exports = router;   // 🔥 VERY IMPORTANT