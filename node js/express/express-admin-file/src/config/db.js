const mysql = require("mysql2");

// first connection WITHOUT database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "milan",
  database: "study_pro"
});

db.connect(err => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
//   console.log("MySQL connected");
});



 
    // CREATE TABLE
    const enrollTable = `
      CREATE TABLE IF NOT EXISTS enrollments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        phone VARCHAR(20),
        course VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    db.query(enrollTable, err => {
      if (err) throw err;
    //   console.log("Enrollments table ready");
    });

   const contactTable = `
   create table if not exists contacts (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     email VARCHAR(255),
     subject VARCHAR(255),
     message TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )
 `
 db.query(contactTable, err => {
    if (err) throw err;
    
    
    // console.log("Contacts table ready");
    });


    const addadmin  = `
    create table if not exists addadmin(
    id int auto_increment primary key,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    role varchar(255),
    created_at timestamp default current_timestamp
  )`;
  db.query(addadmin,err=>{
    if(err) throw err;
    // console.log("addadmin table ready");

  })

module.exports = db;
