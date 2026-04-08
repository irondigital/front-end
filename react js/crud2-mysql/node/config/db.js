const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"mydata"
});

const data = connection.connect((err,result)=>{
    if(err){
        // console.log("error" +err);

    }else{
        // console.log("database connected")
    }
})

const table = `create table if not exists students(
    id int auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null

    )`

    const tables  = connection.query(table,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            // console.log("connected")
        }
    })




module.exports = connection;

