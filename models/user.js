const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  picture: String,
  subscriptions: { type: Array, default: [] },
  orders: { type: Array, default: [] }
});

module.exports = mongoose.model("User", userSchema);
