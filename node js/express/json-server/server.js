const express = require("express");
const axios = require("axios");

const server = express();

server.use(express.json());

const api = "http://localhost:4000/users"

server.get("/users",(req,res)=>{
    const response = axios.get(api);
    res.json(response.data)
});

    // server.post("/users",async(req,res)=>{
    //     const response = await axios.post(api,req.body);
    //     res.status(201).json(response.data);
    // })

server.listen(3000, () => {
  console.log("Express server running on port 3000");
});