const express = require("express");
const mongoose = require("mongoose");
const Students = require("./models/Student");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from Node Serverrrr");
});

// GET ALL STUDENTS
app.get("/students", async (req, res) => {
  try {
    const products = await Students.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Students.findById(id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST STUDENTS
app.post("/students", async (req, res) => {
  try {
    const product = await Students.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});


// UPDATE student

app.put("/update-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Students.findByIdAndUpdate(id, req.body);
    if (!products) {
      return res.status(404).json({ message: "Cannot find this product" });
    }
    const updatedProduct = await Students.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// DELETE STUDENTS
app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Students.findByIdAndDelete(id);
    if (!products) {
      return res.status(404).json({ message: "Cannot find this product" });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DATABASE CONNECTION
mongoose
  .connect(
    "mongodb+srv://elvincabbarl:qHJAfjnT8aceW4Pr@newcluster.yszklb7.mongodb.net/nodeapi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(4000, () => { });
  })
  .catch((err) => {
    console.log(err);
  });
