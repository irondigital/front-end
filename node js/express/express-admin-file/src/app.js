const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { title } = require("process");
const port = 8000;
const session = require("express-session");
const db = require("./config/db");
const bodyParser = require("body-parser");
// const webRoutes = require("./routes/web.routes");
// const connectDB = require("./config/db");
// connectDB();



const app = express();

const staticpath = path.join(__dirname,"../templates/views");
const public  = path.join(__dirname,"../public")
app.set("view engine","ejs")
app.set("views",staticpath)
const webRoutes = require("./routes/web.routes");
const adminRoutes = require("./routes/admin.routes");
const authRoutes = require("./routes/auth.routes");

// console.log("webRoutes =", webRoutes);
// console.log("authRoutes =", authRoutes);
// console.log("adminRoutes =", adminRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(public))

app.use(
  session({
    secret: "edupro-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/", webRoutes);
app.use("/admin", authRoutes);
app.use("/admin", adminRoutes);
app.get("/",(req,res)=>{
    res.render("index")

});



app.get("/index",(req,res)=>{
    res.render("index" ,{
        title :"our homepage"
    })
        
});


app.get("/courses",(req,res)=>{
    res.render("courses" ,{
        title :"popular courses"
    })

    
        
});

app.get("/enroll", (req, res) => {
  

  res.render("enroll", {
    title: "Enroll Now",
   
  });
});

app.post("/enroll", (req, res) => {
  const { name, email, phone, course, message } = req.body;
    const sql = `INSERT INTO enrollments (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [name, email, phone, course, message], (err, result) => {
      if (err) {
        // console.error("Error inserting enrollment:", err);       
        return res.status(500).send("An error occurred while processing your enrollment.");
      }
        res.render("index", {
          title: "Enroll Now",
          success: true
        });
    });
}   );
        

app.get("/pricing",(req,res)=>{
    res.render("pricing",{
        title: "our price"
    })
        
});
app.get("/about",(req,res)=>{
    res.render("about", {
        title : "our about page"
    })
        
});

app.get("/contact",(req,res)=>{
    res.render("contact", {
        title : "contact-us "
    })
        
});
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
    const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
    db.query(sql, [name, email, subject, message], (err, result) => {
      if (err) {
        // console.error("Error inserting enrollment:", err);       
        return res.status(500).send("An error occurred while processing your contact request.");
      }
        res.render("index", {
          title: "Contact Us",
          success: true
        });
    });
}   );




app.use((req,res,next) => {
    res.status(404).render("404");
});

app.listen(port,()=>{
    console.log("port start at 8000")
})