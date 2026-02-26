const express= require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("this is a home page")
})
app.get("/about",(req,res)=>{
    res.send("this is a about page")
})
app.get("/update-data",(req,res)=>{
    res.send("update the data")
})

// delete something
app.get("/delete",(req,res)=>{
    res.send("deleted successfully")});

    app.get("/json",(req,res)=>{
        res.send({"name":"milan",
            "age":23,
             "department":"IT",
             "salary":89500
        })
    })
const port = 5000;
app.listen(port,()=>{
    console.log(`port start at https://localhost:${port}`)
})