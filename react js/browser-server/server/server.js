const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongodb = require("./config/db");

const authRoutes = require("./routes/auth.routes");

mongodb.connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});