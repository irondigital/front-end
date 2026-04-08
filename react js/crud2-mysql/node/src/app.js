const express = require("express");
const app = express();
const mysql = require("mysql2");
const routes = require("../auth-routes/routes");
const port = 5000;


app.use(express.urlencoded({extended:true}));
app.use("/auth/api",routes)
app.use(express.static("public"))
app.use(express.json());

app.listen(port,(e)=>{
    if(e){
        console.log("server err" + e)
    }else{
        console.log("server start at 5000")
    }
})