const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  username: String,
  email: {
    type: String,
    unique: true,
    sparse: true
  },
  password: String,
  photo: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
