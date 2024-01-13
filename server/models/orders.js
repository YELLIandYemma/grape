// models/orders.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  quantity: Number,
  product: String,
  address: String, // Add the address field
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
