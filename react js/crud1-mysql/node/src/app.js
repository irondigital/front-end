const express = require("express");
const app = express();
const port  = 5000;
const cors = require("cors");
const mysql = require("mysql2");
const db = require("../config/db")
const routes = require("../auth-routes/routes")

// db();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.use("/auth/api",routes);

app.listen(port,()=>{
    console.log(`server run at ${port}`)
})