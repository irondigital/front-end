const express = require("express");
const cors = require("cors")
const port = 5000;

const app = express();

app.use(cors());
app.use(express.json());

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    type: "Medicinal",
    price: 199,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Money Plant",
    type: "Indoor",
    price: 149,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Rose",
    type: "Outdoor",
    price: 99,
    image: "https://via.placeholder.com/200",
  },
];

// GET all plants
app.get("/api/plants", (req, res) => {
  res.json(plants);
});

// GET single plant
app.get("/api/plants/:id", (req, res) => {
  const plant = plants.find(p => p.id == req.params.id);
  res.json(plant);
});


app.get("/",(req,res)=>{
    res.send("server is start")
})

app.listen(port,()=>{
    console.log("server start at port 3000")
})