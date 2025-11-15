require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Passport config
require("./passportConfig");

// Routes
const authRoutes = require("./routes/authRoutes");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static(__dirname));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// AUTH ROUTES (IMPORTANT)
app.use("/", authRoutes);

// Protected Dashboard (ONLY AFTER LOGIN)
app.get("/dashboard", (req, res) => {
  if (!req.user) return res.redirect("/login.html");
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

// Logged-in User Data
app.get("/user", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Not Logged In" });

  res.json({
    name: req.user.username || req.user.name || "User",
    email: req.user.email,
    subscriptions: req.user.subscriptions || [],
    orders: req.user.orders || [],
  });
});

// HOME PAGE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start Server
app.listen(port, () =>
  console.log(`🚀 Server running at http://localhost:${port}`)
);
