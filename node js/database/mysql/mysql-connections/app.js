const express = require("express");
const ejs = require("ejs");
const port = 8000;

const app = express();
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"milan",
    database:"mysql2"
});

db.connect((err)=>{
    if(err){
        console.log("not connected");
        return;        
    }
    console.log("connected successfully")
});

// const table = `
// create table if not exists users(
// id int auto_increment primary key,
// name varchar(255),
// email varchar(255),
// password varchar(255),
// create_at timestamp default current_timestamp

// )`;

// db.query(table,(err,result)=>{
//     if(err){
//         console.log("table not connected");
//         return;
//     }
//     console.log("table connected")
// })

// const table2 = `
// create table if not exists student(
// sid int auto_increment primary key,
// name varchar(255),
// depart varchar(244),
// number binary,
// email varchar(255),
// password varchar(255),
// fees float,
// create_at timestamp default current_timestamp
// )
// `;

// db.query(table2,(err,result)=>{
//     if(err){
//         console.log("table2 not created")
//     }
//     console.log("table2 created")
// })

// const user1 = [
//     ["priya","ece",1,"priya@122","priya1",20000],
//      ["riya","ce",0,"riya@122","riya1",30000],
//       ["griya","it",1,"griya@122","griya1",50000],
//        ["sriya","mechanical",0,"sriya@122","sriya1",40000],
//         ["criya","civil",1,"criya@122","criya1",60000],
//          ["miya","ic",0,"miya@122","miya1",90000]

// ]
// const data1 = "insert into student(name,depart,number,email,password,fees) values ?"

// db.query(data1,[user1],(err,result)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })


// const user = [
//     ["milan","milan@123","milan123"],
//      ["ketan","ketan@123","ketan123"],
//       ["dk","dk@123","dk123"],
//        ["yash","yash@123","ysah123"],
//         ["mehul","mehul@123","mehul123"],
// ]

// const data = "insert into users(name,email,password) values ?"

// db.query(data,[user],(err,result)=>{
//       if (err) {
//     console.log("Insert Error:", err);
//     return;
//   }
//   console.log("User Inserted with ID:", result.insertId);
// });

// const user1 = [
//     ["kkk","kkk@123","kkk123"],
//      ["vipul","vipul@123","vipul123"],
//      ]

//      const data1 = "insert into users(name,email,password) values ?"

//      db.query(data1,[user1],(err,result)=>{
//         if(err){
//             console.log("insert err :" ,err)
//             return;
//         }
//         console.log(result.affectedRows)
//      })

    //  const read = "select * from users"
    //  db.query(read,(err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(result)
    //  })
    //  const id =[11,13,16]
    //  const newemail = "balas@gmail.com"
    
    // const read= "update users set email = ? where id in(11,13,16)"
    // db.query(read,[newemail],(err,result)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(result)
    // })


    //     const read= "delete from users where id in (7,8,9,10,11,12,13,14,15,16)"
    // db.query(read,(err,result)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(result)
    // })

//     const data = "alter table users add department float after id";

//     db.query(data, (err, result) => {
//   if(err) {
//     console.log("Error renaming column:", err);
//     return;
//   }
//   console.log("Column renamed successfully!");
// });


//     const data = "select * from users where id=5";

//     db.query(data, (err, result) => {
//   if(err) {
//     console.log("Error renaming column:", err);
//     return;
//   }
//   console.log("Column renamed successfully",result);
// });

// const salaries = [
//   { id: 1, salary: 50000 },
 
//   { id: 3, salary: 55000 },
//   { id: 4, salary: 55000 },
//   { id: 5, salary: 55000 },
//   { id: 6, salary: 55000 },
// ];

// salaries.forEach(user => {
//   const sql = "UPDATE users SET salary = ? WHERE id = ?";
//   db.query(sql, [user.salary, user.id], (err, result) => {
//     if(err) console.log(err);
//     else console.log(`User ${user.id} salary updated`);
//   });
// });
// const sql = `
// UPDATE users
// SET salary = CASE id
//   WHEN 1 THEN 55500

//   WHEN 3 THEN 5650
// END
// WHERE id IN (1,2,3)
// `;

// db.query(sql, (err, result) => {
//   if(err) return console.log(err);
//   console.log("Salaries updated:", result.affectedRows);
// });

const joins = 
`SELECT student.*, users.*
FROM student
JOIN users ON student.id = users.id`
;

db.query(joins,(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})
//   const data3 = `
// ALTER TABLE student
// CHANGE sid id INT AUTO_INCREMENT 
// `;

// db.query(data3, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });


app.listen(port,()=>{
    console.log("port has been started successfully")
})