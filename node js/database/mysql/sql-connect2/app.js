const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.set("view engine","ejs");
app.set("views","./compo");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("contact");
});

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"taskmanager_app"
})
db.connect((err=>{
    if(err){
        console.log("Database connection failed", err);
    }
    console.log("Database connected successfully");
}))

const createtable = `create table if not exists forms(
id int auto_increment primary key,
name varchar(255) not null,
email varchar(255) not null,
created_at datetime default current_timestamp)`;
db.query(createtable,(err,result)=>{
    if(err){
        console.log("Table creation failed", err);
    }
    console.log("Table created successfully");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/contact",(req,res)=>{
    const {name,email} = req.body;
    const insertquery = `insert into forms(name,email) values (?,?)`;
    db.query(insertquery,[name,email],(err,result)=>{
        if(err){
            console.log("Data insertion failed", err);
            
        }
        console.log("Data inserted successfully");
        res.redirect("/data");
    })
})
app.get("/data",(req,res)=>{
    const data = `select * from forms`;
    db.query(data,(err,result)=>{
        if(err){
            console.log("Data retrieval failed", err);
        }
        res.render("data",{forms:result});
    })
});
app.get("/delete/:id",(req,res)=>{
    const id =req.params.id;
    const deletequery = `delete from forms where id=?`;
    db.query(deletequery,[id],(err,result)=>{
        if(err){
            console.log("Data deletion failed", err);
        }
        console.log("Data deleted successfully");
        res.redirect("/data");
    })
})

app.get("/update/:id",(req,res)=>{
    const id = req.params.id;
    const selectquery = `select * from forms where id=?`;
    db.query(selectquery,[id],(err,result)=>{
        if(err){
            console.log("Data retrieval for update failed", err);
        }
        res.render("update",{forms:result[0]});
    })
});

app.post("/update/:id",(req,res)=>{
    const id = req.params.id;
    const {name,email} = req.body;
    const updatequery = `update forms set name=?, email=? where id=?`;
    db.query(updatequery,[name,email,id],(err,result)=>{
        if(err){
            console.log("Data update failed", err);
        }
        console.log("Data updated successfully");
        res.redirect("/data");
    })
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});