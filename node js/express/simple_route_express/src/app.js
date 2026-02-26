const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

// create mysql2 connection
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "milan",
  database: "taskmanager_app",
})
// check connection is stablished or not
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});
app.use(bodyParser.urlencoded({ extended:false}));
app.use(session({
  secret:`mysecretkey`,
  resave:false,
  saveUninitialized:true
}));
app.use(flash());
app.use((req,res,next)=>{
  res.locals.success = req.flash('success'); // ✅ correct spelling
  res.locals.error = req.flash('error');
  next();
})

app.set("view engine","ejs")
 app.set("views",path.join(__dirname,"../templates/views"));

 app.use(express.static(path.join(__dirname,"../public")))

app.get("/", (req, res) => {
  res.render("index", { title: "Greenarry Plants" });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/ourport", (req, res) => {
  res.render("ourport");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/booking", (req, res) => {
  res.render("booking");
});


const createTableQuery = `CREATE TABLE IF NOT EXISTS addmore (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(200) NOT NULL,
    service VARCHAR(255) NOT NULL,
    date varchar(255) NOT NULL,
    time varchar(255) NOT NULL, 
    address TEXT,
    description TEXT
)`;
db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error("Error creating table:", err);
    return;
  }
  console.log(result, "Table created or already exists");
});

const insertdata = `INSERT INTO addmore (name, email, phone, service, date, time, address, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

 app.post("/addtasks", (req,res)=>{
  const {name,email,phone,service,date,time,address,description} = req.body;
  
  db.query(insertdata,[name,email,phone,service,date,time,address,description],(err,result)=>{
    if(err){
      console.error('Error inserting data:',err);
      req.flash('error','There was an error adding your task');
      return res.redirect('/booking');
    }
    console.log('Data inserted successfully:',result);
    req.flash('success','Task added successfully');
    res.redirect('/booking');
  })
})
 

 




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});