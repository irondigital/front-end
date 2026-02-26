const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db = require("../config/db");  
const mysql = require('mysql2');
const routes = require('../routes/auth.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mysql.connection()
app.use("/api/auth", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

