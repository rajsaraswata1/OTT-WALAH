require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Passport Config
require("./passportConfig");

// ✅ Routes
const authRoutes = require("./routes/authRoutes");

// ✅ Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Static Files
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Session Setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// ✅ Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// ✅ MongoDB Connection
mongoose
 connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Auth Routes
app.use("/", authRoutes);

// ✅ Protected Dashboard
app.get("/dashboard", (req, res) => {
  if (!req.user) return res.redirect("/login.html");
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// ✅ Logged-in User Data API
app.get("/user", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Not Logged In" });

  res.json({
    name: req.user.username || req.user.name || "User",
    email: req.user.email,
    subscriptions: req.user.subscriptions || [],
    orders: req.user.orders || [],
  });
});

// ✅ Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));