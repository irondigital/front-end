const express = require("express");
const router = express();
const db = require("../config/db")


router.get("/info",async (req,res)=>{
    db.query(`select * from datas`,(err,result)=>{
        if(err){
            res.status(500).json({message:"server error"})
        }else{
            console.log("data readed")
            res.status(200).json(result)
        }
    })
})

router.post("/info",(req,res)=>{
    const {name,email} = req.body

    db.query(`insert into datas (name,email) values (?,?)`,[name,email],(err,result)=>{
        if(err){
            res.status(500).json({message:"server error"})
        }else{
             console.log("data inserted")
            res.status(200).json(result)
        }
    })
})

router.get("/info/:id",(req,res)=>{
     const { id } = req.params;
    db.query(`select * from datas where id= ?`,[id],(err,result)=>{
        if(err){
             res.status(500).json({message:"server error"})
        }else{
             console.log("date inserted")
            res.status(200).json(result[0])
        }
    })
})

router.put("/info/:id",(req,res)=>{
    const { id } = req.params;
    const { name, email } = req.body;

    db.query(
        "UPDATE datas SET name=?, email=? WHERE id=?",
        [name, email, id],
        (err,result)=>{
            if(err){
                console.log(err);
                res.status(500).json({message:"server error"});
            }else{
                console.log("update success");
                res.status(200).json(result);
            }
        }
    );
});


router.delete("/info/:id",(req,res)=>{
     const { id } = req.params;
     
    db.query(`delete from datas where id =?`,[id],(err,result)=>{
        if(err){
             res.status(500).json({message:"server error"})
        }else{
             console.log("delete inserted")
            res.status(200).json(result)
        }
    })
})
module.exports = router;