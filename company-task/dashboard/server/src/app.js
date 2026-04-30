const express = require("express");
const app = express();
const port =  5000;

const cors  = require("cors");
require("dotenv").config();
const db = require("../config/db")
const routes = require("../auth_routes/routes")


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/auth/api", routes)


app.listen(port, ()=>{
    
})