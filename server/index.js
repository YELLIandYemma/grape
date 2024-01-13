const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const phoneModel = require("./models/phones");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/phones");

app.get("/phones", (req, res) => {
  phoneModel
    .find()
    .then((phones) => res.json(phones))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server running");
});
