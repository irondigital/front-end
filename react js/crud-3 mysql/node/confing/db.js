const mysql = require("mysql2");

const connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"crud3"
})
connect.query((err,res)=>{
if(err){
    console.log("not connected");
    }else{
    console.log("connected")
    }
})




module.exports = connect;