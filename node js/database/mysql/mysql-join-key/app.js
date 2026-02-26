const express = require('express');
const app = express();
const port = 3000;

const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "milan",
    database: "join_example"
});
db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }   
    console.log("Connected to database.");
});

// const table1 = `
// CREATE TABLE IF NOT EXISTS authors (
//     author_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     email VARCHAR(255)
// )`;
// db.query(table1, (err, result) => {
//     if (err) {
//         console.error("Error creating authors table:", err);
//         return;
//     }
//     console.log("Authors table created or already exists.");
// });

// const table3 = `
// CREATE TABLE IF NOT EXISTS stude (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     email VARCHAR(100),
//     author_id INT
// )`;

// db.query(table3, (err, result) => {
//     if (err) {
//         console.error("Error creating books table:", err);
//         return;
//     }
//     console.log("Books table created or already exists.");
// });

// const add = [
//     ["milan","milan123"],["ketan","ketan123"],["balas","alas12"]
// ]

// const insertdata = `insert into authors(name,email) values ?`

// db.query(insertdata,[add],(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
// })


// const add = [
//      ["sriya","sriya@122"],
//         ["criya","criya@122"],
//          ["miya","miya@122"]
// ]

// const insertdata = `insert into books(title,genre) values ?`

// db.query(insertdata,[add],(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
// })

// const insertdata = `ALTER TABLE books 
// ADD COLUMN author_id INT;
// `



// db.query(insertdata,(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
// })


// const fk = `
// ALTER TABLE books
// ADD CONSTRAINT fk_books_authors
// FOREIGN KEY (author_id)
// REFERENCES authors(author_id);
// `;

// db.query(fk, (err, result) => {
//     if (err) {
//         console.error("Error adding foreign key:", err);
//         return;
//     }
//     console.log("Foreign key added successfully.");
// });

// db.query("SHOW CREATE TABLE books", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result[0]["Create Table"]);
// });

// const sql = "ALTER TABLE books DROP FOREIGN KEY fk_books_authors";
// db.query(sql, (err, result) => {
//   if (err) console.log(err);
//   else console.log("Foreign key removed!");
// });

// const add = [
//      ["priya","sriya@122",1],
//         ["friya","criya@122",2],
//          ["ciya","miya@122",3]
// ]

// const insertdata = `insert into stude(name,email,author_id) values ?`

// db.query(insertdata,[add],(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
// })


const data = `SELECT 
    authors.author_id,   
    books.title,         
    stude.name         
FROM authors
JOIN books ON authors.author_id = books.author_id
JOIN stude ON authors.author_id = stude.author_id 
           AND books.author_id = stude.author_id
           limit 3;
`

db.query(data,(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});