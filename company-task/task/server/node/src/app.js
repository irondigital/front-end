const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const database = require("../confing/db");
const routes = require("../routes/auth.routes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/auth/api",routes)


app.listen(port ,()=>{
    console.log(`server running at port number ${port}`)
})