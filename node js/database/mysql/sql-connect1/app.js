const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Middleware
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("./compo/contact", { title: "Home Page" });
});

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"taskmanager_app"
});
  db.connect((err)=>{
    if(err){
        console.log("Error in connection");
    }
    console.log("DataBase connected");
  })
const contacttable = `create table if not exists contacttable(
id int auto_increment primary key,
name varchar(255) not null,
email varchar(255) not null,
phone varchar(12) not null,
subject varchar(255) not null,
company varchar(255) not null,
message text not null,
date datetime default current_timestamp);`;

db.query(contacttable,(err,result)=>{
    if(err){
        console.log("Error in creating table",err);
    }
    console.log("Table created successfully");
})

// data add in database
app.use(bodyParser.urlencoded({ extended:true }));
app.post("/contact",(req,res)=>{
    const{name,email,phone,subject,company,message} = req.body;
    const insertquery=`insert into contacttable(name,email,phone,subject,company,message) values (?,?,?,?,?,?);`;
    db.query(insertquery,[name,email,phone,subject,company,message],(err,result)=>{
        if(err){
            console.log("Error in inserting data",err);
        }
        console.log("Data inserted successfully");
        res.redirect("/data");  
    })
   

})

app.get("/data",(req,res)=>{
    const selectquery = `select * from contacttable`;
    db.query(selectquery,(err,result)=>{
        if(err){
            console.log("Error in fetching data",err);
        }
        console.log("Data fetched successfully");
        res.render("./compo/data",{data:result});
    });
})

app.get("/delete/:id",(req,res)=>{
    const id = req.params.id;
    const deletequery = `delete from contacttable where id = ?`;
    db.query(deletequery,[id],(err,result)=>{
        if(err){
            console.log("Error in deleting data",err);
        }
        console.log("Data deleted successfully");
        res.redirect("/data");
        
    });
    
})

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM contacttable WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Error fetching record", err);
      return res.send("Error fetching record");
    }
    res.render("compo/update", { data: result[0] }); // send single record to form
  });
});
app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, phone, subject, company, message } = req.body;

  const sql = `
    UPDATE contacttable
    SET name=?, email=?, phone=?, subject=?, company=?, message=?
    WHERE id=?`;

  db.query(sql, [name, email, phone, subject, company, message, id], (err, result) => {
    if (err) {
      console.log("Error updating record", err);
      return res.send("Error updating record");
    }
    res.redirect("/data"); // redirect back to show page
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});