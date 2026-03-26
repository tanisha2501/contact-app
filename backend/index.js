const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/contactDB");

const Contact = mongoose.model("Contact", {
  name: String
});

app.post("/add", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.send("added");
});

app.get("/contacts", async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});

app.listen(5000, () => console.log("server started"));