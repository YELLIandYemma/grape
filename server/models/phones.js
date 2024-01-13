const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  desc: String,
  price: String,
  title: String,
});

const phoneModel = mongoose.model("phones", phoneSchema);
module.exports = phoneModel;
