const express = require("express");
const app = express();
const cors = require("cors");
const db = require("../confing/db")

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log("server start at port 5000")
})