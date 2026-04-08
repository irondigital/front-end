const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const data = require("../config/db");
const routes = require("../auth_routes/routes")

// data();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/auth/api",routes)

app.listen(port,()=>{
    console.log("server start at port number 5000 ")
})


