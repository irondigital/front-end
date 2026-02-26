const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require("../config/connect");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("contact");
})

const Schema = require("../models/schema");

app.post("/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    const newschema = new Schema({
        name,
        email,
        subject,
        message
    });

    newschema.save()
        .then(() => {
            // Send ONE response: either a redirect or a message
            res.redirect("/read"); // redirects to homepage
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("There was an error sending your message.");
        });
});


const Contact = require("../models/schema");

// Show all contacts
app.get("/read", async (req, res) => {
  try {
    // Fetch all contacts from MongoDB
    const read = await Contact.find({});

    // Render EJS page and send data
    res.render("read", { contacts: read });
  } catch (err) {
    console.log(err);
    res.send("Error fetching contacts");
  }
});

app.post("/delete/:id", async (req, res) => {
  try {
    // Fetch all contacts from MongoDB
    const read = await Contact.findByIdAndDelete(req.params.id);

    // Render EJS page and send data
    res.redirect("/read");
  } catch (err) {
    console.log(err);
    res.send("Error fetching contacts");
  }
});

app.get("/update/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.send("Contact not found");
    }
    res.render("update", { contact }); // render update.ejs
  } catch (err) {
    console.log(err);
    res.send("Error loading update form");
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    await Contact.findByIdAndUpdate(req.params.id, { name, email, subject, message });
    res.redirect("/read"); // redirect back to contact list
  } catch (err) {
    console.log(err);
    res.send("Error updating contact");
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});