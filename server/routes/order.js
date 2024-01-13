// routes/orders.js

const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.post("/", async (req, res) => {
  const { quantity, product } = req.body;

  try {
    const newOrder = new Order({ quantity, product });
    const savedOrder = await newOrder.save();

    const insertedOrder = savedOrder.toObject({
      virtuals: false,
      versionKey: false,
    });

    res.json({
      id: insertedOrder._id,
      product: insertedOrder.product,
      quantity: insertedOrder.quantity,
      __v: insertedOrder.__v,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
