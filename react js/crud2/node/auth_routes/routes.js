const express = require("express");
const router = express.Router();
const Schema = require("../model/model");

router.get("/crud3", async(req,res)=>{
   try{
     const data = await Schema.find(req.body)
     res.status(200).json(data)
    //  console.log(data)
   }catch(err){
     res.status(500).json({message:"server error"})
   }

})

router.post("/crud3", async (req, res) => {
  try {

    const user = new Schema(req.body);

    const savedUser = await user.save();

    // console.log(savedUser);

    res.status(201).json({
      message: "Data saved successfully",
      data: savedUser
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server error"
    });

  }
});

router.put("/crud3/:id", async (req,res)=>{
  try{

    const data = await Schema.findByIdAndUpdate(
      req.params.id,     // id
      req.body,          // updated data
      { new:true }       // return updated document
    );

    res.status(200).json(data);

  }catch(err){

    console.log(err);

    res.status(500).json({
      message:"server error"
    });

  }
});
router.delete("/crud3/:id",async(req,res)=>{
   try{
     const data = await Schema.findByIdAndDelete(
        req.params.id,
        req.body
    )
    res.status(200).json(data)
}catch(err){
        console.log(err);
        res.status(500).json({message:"server error"})
    }
})

router.get("/crud3/:id", async (req,res)=>{
  try{

    const data = await Schema.findById(req.params.id);

    res.status(200).json(data);

  }catch(err){

    console.log(err);

    res.status(500).json({
      message:"Server Error"
    });

  }
});
module.exports = router;