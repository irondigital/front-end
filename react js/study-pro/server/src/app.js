const express = require('express');
const routes = require('../routes/routes.auth');
const port =  5000;
const cors = require("cors")
const db = require('../confing/mysql');
require("dotenv").config();
const connectdb = require('../confing/mongo');

connectdb();
 db;
const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
const authMiddleware = require("../middleware/authMiddleware");
// Importing routes
;

// Using routes
app.use('/auth/api', routes);

app.get("/api/admin/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})