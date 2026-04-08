// const express = require("express");
// const router = express();
// const db = require("../config/db")


// router.get("/info",async (req,res)=>{
//     db.query(`select * from datas`,(err,result)=>{
//         if(err){
//             res.status(500).json({message:"server error"})
//         }else{
//             console.log("data readed")
//             res.status(200).json(result)
//         }
//     })
// })

// router.post("/info",(req,res)=>{
//     const {name,email} = req.body

//     db.query(`insert into datas (name,email) values (?,?)`,[name,email],(err,result)=>{
//         if(err){
//             res.status(500).json({message:"server error"})
//         }else{
//              console.log("data inserted")
//             res.status(200).json(result)
//         }
//     })
// })

// router.get("/info/:id",(req,res)=>{
//      const { id } = req.params;
//     db.query(`select * from datas where id= ?`,[id],(err,result)=>{
//         if(err){
//              res.status(500).json({message:"server error"})
//         }else{
//              console.log("date inserted")
//             res.status(200).json(result[0])
//         }
//     })
// })

// router.put("/info/:id",(req,res)=>{
//     const { id } = req.params;
//     const { name, email } = req.body;

//     db.query(
//         "UPDATE datas SET name=?, email=? WHERE id=?",
//         [name, email, id],
//         (err,result)=>{
//             if(err){
//                 console.log(err);
//                 res.status(500).json({message:"server error"});
//             }else{
//                 console.log("update success");
//                 res.status(200).json(result);
//             }
//         }
//     );
// });
// router.delete("/info/:id",(req,res)=>{
//      const { id } = req.params;
     
//     db.query(`delete from datas where id =?`,[id],(err,result)=>{
//         if(err){
//              res.status(500).json({message:"server error"})
//         }else{
//              console.log("delete inserted")
//             res.status(200).json(result)
//         }
//     })
// })
// module.exports = router;


const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/student",(req,res)=>{
    db.query(`select * from students`,(err,result)=>{
     if(err){
      res.status(500).json({message:"server error"})
     }else{
        res.status(200).json({message:result})
     }
    })
})

router.post("/student",(req,res)=>{
    const {name,email,password} = req.body
    db.query(`insert into students (name,email,password) values (?,?,?)`,[name,email,password],(err,result)=>{
        if(err){
            res.status(500).json({message:"server error"})
        }else{
             res.status(200).json({message:result})
        }
    })
})

router.get("/student/:id",(req,res)=>{
    const {id} = req.params
    db.query(`select * from students where id = ?`,[id],(req,res)=>{
        if(err){
            res.status(500).json({message:"server error"})
        }else{
             res.status(200).json({message:result[0]})
        }

    })
})

router.put("/student/:id",(req,res)=>{
    const { id } = req.params;
    const { name, email,password } = req.body;

    db.query(
        "UPDATE students SET name=?, email=? WHERE id=?",
        [name, email,password],
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
router.delete("/student/:id",(req,res)=>{
     const { id } = req.params;
     
    db.query(`delete from students where id =?`,[id],(err,result)=>{
        if(err){
             res.status(500).json({message:"server error"})
        }else{
             console.log("delete inserted")
            res.status(200).json(result)
        }
    })
})

module.exports = router;