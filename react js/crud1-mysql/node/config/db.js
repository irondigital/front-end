const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"mydata"
})
connection.connect((err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected")
    }
})

const sql = `create table if not exists datas(
id int auto_increment primary key,
name varchar(255) not null,
email varchar(255) not null
)`

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
    }else{
    console.log("table created")
    }
});




module.exports = connection