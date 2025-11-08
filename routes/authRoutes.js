const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Signup route (improved duplicate handling)
router.post("/signup", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) return res.send("❌ Passwords do not match");

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send("✅ Signup successful");
  } catch (err) {
    // Duplicate key error code for MongoDB is 11000
    if (err.code === 11000) return res.send("❌ Email already exists");
    console.error(err);
    res.send("❌ Error saving user");
  }
});

// Login route (simple)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.send("❌ User not found");
    if (user.password !== password) return res.send("❌ Incorrect password");
    // create session (passport will handle if used)
    req.login(user, err => {
      if (err) return res.send("❌ Login error");
      return res.send("✅ Login successful");
    });
  } catch (err) {
    console.error(err);
    res.send("❌ Login error");
  }
});

// Google OAuth start
router.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback
router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/?error=google" }),
  (req, res) => {
    // successful login
    res.redirect("/dashboard"); // tum apna dashboard page bana sakte ho
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;
