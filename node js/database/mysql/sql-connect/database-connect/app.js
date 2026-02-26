const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const app = express();
const port = 3000;

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "compo"));

// Serve static files (for Tailwind CSS if needed)
app.use(express.static("public"));

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "milan",
  database: "taskmanager_app"
});

db.connect((err) => {
  if (err) return console.error("DB Connection Error:", err);
  console.log("Connected to database.");

  // Create table if not exists
  const createTable = `
    CREATE TABLE IF NOT EXISTS contact (
      id INT PRIMARY KEY AUTO_INCREMENT,
      full_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(50),
      subject VARCHAR(150),
      company VARCHAR(150),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  db.query(createTable, (err) => {
    if (err) console.error("Table creation failed:", err);
    else console.log("Contact table ready.");
  });
});

// GET route to render contact page
app.get("/", (req, res) => {
  res.render("contact");
});

// POST route to insert form data
app.post("/contact", (req, res) => {
  const { full_name, email, phone, subject, company, message } = req.body;

  const sql = `
    INSERT INTO contact (full_name, email, phone, subject, company, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [full_name, email, phone, subject, company, message], (err, result) => {
    if (err) {
      console.error("Insert Error:", err);
      return res.send("Database Error");
    }
    res.send("Form Submitted Successfully!");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
