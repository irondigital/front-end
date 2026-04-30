const express = require("express");
const app = express();
const port =5000;
require("dotenv").config();
const db = require("../config/db");
const cors = require("cors");
const routes = require("../auth/routes")

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extendedd:true}));
app.use("/auth/api",routes)

app.listen(port,()=>{
    console.log("server running");
})