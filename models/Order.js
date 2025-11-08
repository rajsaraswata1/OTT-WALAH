const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: Array,
  amount: Number,
  currency: String,
  status: { type: String, default: "pending" },
  paymentProof: String,
  customerEmail: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
