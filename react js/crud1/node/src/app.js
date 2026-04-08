const express = require("express");
const app  = express();
const port  = 5000;
const cors=require("cors")
const db = require("../config/db")
const routes = require("../routes/router")

db();

app.use(express.static("public"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/auth/api", routes)



app.listen(port,()=>{
    console.log("port running")
})