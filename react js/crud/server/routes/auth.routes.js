const express = require('express');
// const cors = require('cors');

const router = express.Router();
const connection = require('../config/db');
const mysql = require("mysql2");

router.post("/users", async (req, res) => {
    const { fullname, email } = req.body;

    
const data =  connection.query(
  "INSERT INTO users (name, email) VALUES (?, ?)",
  [fullname, email],
  (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error", error: err });
    }

    res.status(200).json({ message: "User created successfully" });
  }
);
// console.log(data);
   
});


router.get("/users", async (req,res)=>{
    connection.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error", error: err });
        }
        res.status(200).json(results);
    });

})

router.get("/users/:id", async (req,res)=>{
    const { id } = req.params;
    connection.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error", error: err });
        }
        res.status(200).json(results[0]);
    });
})                      
router.put("/users/:id", async (req,res)=>{
    const { id } = req.params;
    const { name, email } = req.body;
    connection.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error", error: err });
        }
        res.status(200).json({ message: "User updated successfully" });
    });
})

router.delete("/users/:id", async (req,res)=>{
    const { id } = req.params;
    connection.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error", error: err });
        }
        res.status(200).json({ message: "User deleted successfully" });
    });
})

module.exports = router;