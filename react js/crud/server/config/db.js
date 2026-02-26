const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
    user: 'root',
    password: 'milan',
    database: 'sdata'
}); 

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
    console.log('Connected to the database');
});

const tablename = `create table if not exists users (
    id int primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    created_at datetime default current_timestamp
)`;  
connection.query(tablename, (err, result) => {
    if (err) {
        console.error('Error creating table:', err);
        return;
    }
    console.log('Table created or already exists');
});


module.exports = connection;