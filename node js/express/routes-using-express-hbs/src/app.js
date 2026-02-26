const express = require("express");
const path = require("path");
const hbs = require("hbs")
const port = process.env.PORT || 3000;

const app = express();

const staticpath = path.join(__dirname,"../public")
const  templatepath = path.join(__dirname,"../templates/view")
const  partialpath = path.join(__dirname,"../templates/partials")

app.use(express.static(staticpath));
// app.use(express.static(partialpath))
hbs.registerPartials(partialpath);  

app.set("view engine", "hbs");
app.set("views",templatepath);

app.get( "/" , (req,res) =>{
  res.render("index");
})


app.listen(port, (e) =>{
    console.log(`server run at port number ${port}`);
})