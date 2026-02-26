const express = require("express");
const path = require("path");
const ejs = require("ejs");
const port = 3000;

const app = express();



app.set("view engine" , "ejs")
app.set("views",  path.join(__dirname, "../templates/views"))

app.use(express.static(path.join(__dirname,"../public")));

app.get("/",(req,res) =>{
    res.render("index")
});


app.get("/home",(req,res) =>{
    res.render("index")
});


app.get("/services",(req,res) =>{
    res.render("services")
});


app.get("/about",(req,res) =>{
    res.render("about")
});


app.get("/courses",(req,res) =>{
    res.render("courses")
});


app.get("/pricing",(req,res) =>{
    res.render("pricing")
});

app.get("/contact",(req,res) =>{
    res.render("contact")
});



app.listen(port, ()=>{
    console.log("server started at 3000")
})