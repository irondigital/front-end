const express=require('express');
const app=express();
const port=3000;
// load a path ...
const path=require("path");
const flash=require("connect-flash");
const session=require("express-session");
const parser=require("body-parser");
// load a title ..
const { title }=require("process");

// create mysql2 connection
const mysql2=require('mysql2');
const db=mysql2.createConnection({
host:'localhost',
user:'root',
password:'milan',
database:'taskmanager_app'
});
// check connection is stablished or not
db.connect((err)=>{
if(err){
console.error('Error connecting to database:',err);
return;
}
console.log('Connected to database');
});


// create a table in mysql2 using create tables query
const createTableQuery=`CREATE TABLE IF NOT EXISTS addtask (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    tasktype VARCHAR(255) NOT NULL,
    added_date varchar(255) NOT NULL,
    start_time varchar(255) NOT NULL,
    end_time varchar(255) NOT NULL, 
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`; 
db.query(createTableQuery,(err,result)=>{
    if(err){
        console.error('Error creating table:',err);
        return;
    }
    console.log(result,'Table created or already exists');

});

app.use(parser.urlencoded({extended:false}));
// app.use(parser.json());
app.use(session({
    secret:`mysecretkey`,
    resave:false,
    saveUninitialized:true
}));
app.use(flash());
    app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
    });
// create a task manager app routing 

// load or set a directory or static path in templates..
app.set('views',path.join(__dirname,'views'));
// used a static path load in templates 
app.use(express.static(path.join(__dirname,'public')));

// set a default engine ejs 
app.set('view engine','ejs');

// create a routing of home page ....
app.get('/',((req,res)=>{
res.render('index',{title:'Node js Task Manager APP Home Page(MYSQL2)'});
}))

// create a routing of add dashboard ....
app.get('/dashboard',((req,res)=>{
res.render('dashboard',{title:'Node js Task Manager APP :: Dashboard'});
}))

// create a routing of add manage task ....
app.get('/managetask',((req,res)=>{
res.render('managetask',{title:'Node js Task Manager APP :: Dashboard'});
}))

app.post("/addtask",(req,res)=>{
    

    const{title,tasktype,added_date,start_time,end_time,description}=req.body;
    
console.log(req.body);
    const insertQuery=`INSERT INTO addtask (title,tasktype,added_date,start_time,end_time,description) VALUES (?,?,?,?,?,?)`;
    db.query(insertQuery,[title,tasktype,added_date,start_time,end_time,description],(err,result)=>{
        if(err){
            console.error('Error inserting task:',err);
            req.flash('error','Error adding task. Please try again.');
            return res
            .redirect('/dashboard');
        }
        console.log('Task added successfully:',result);
        req.flash('success','Task added successfully!');
        res.redirect('/dashboard');
    });
});







// The 404 catch-all route handler (MUST BE LAST)
app.use((req, res, next) => {
// Set the HTTP status code to 404
res.status(404);
// Render your custom 404 EJS page
res.render('pagenotfound', { title: 'Page Not Found' });
});





// create a server using listen method
app.listen(port,()=>{
console.log(`Server is running on http://localhost:${port}`);
});

 