const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const phoneModel = require("./models/phones");
const Order = require("./models/orders");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/phones");

app.get("/phones", (req, res) => {
  phoneModel
    .find()
    .then((phones) => res.json(phones))
    .catch((err) => res.json(err));
  33333333;
});

app.post("/orders", async (req, res) => {
  const { quantity, product, address } = req.body;

  try {
    const newOrder = new Order({ quantity, product, address });
    const savedOrder = await newOrder.save();

    const insertedOrder = savedOrder.toObject({
      virtuals: false,
      versionKey: false,
    });

    res.json({
      id: insertedOrder._id,
      product: insertedOrder.product,
      quantity: insertedOrder.quantity,
      address: insertedOrder.address, // Include the address in the response
      __v: insertedOrder.__v,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.listen(3001, () => {
  console.log("server running");
});
