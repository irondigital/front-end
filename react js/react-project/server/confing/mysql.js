const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"eduprodb"
})
connection.connect((err)=>{
    if(err){
        console.log("Error connecting to MySQL database:", err);
    }else{
        console.log("MySQL database connected successfully");
    }
})

module.exports = connection;