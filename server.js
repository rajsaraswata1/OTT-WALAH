require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Routes
const authRoutes = require("./routes/authRoutes");

// Passport config
require("./passportConfig");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve frontend
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

app.use(passport.initialize());
app.use(passport.session());

// ✅ MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// ✅ AUTH ROUTES
app.use("/", authRoutes);

// ✅ DASHBOARD PROTECTED ROUTE
app.get("/dashboard", (req, res) => {
    if (!req.user) return res.redirect("/login.html");
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// ✅ API to get logged-in user
app.get("/user", (req, res) => {
    if (!req.user)
      return res.status(401).json({ error: "Not Logged In" });

    res.json({
      name: req.user.username || req.user.name || "User",
      email: req.user.email,
      subscriptions: req.user.subscriptions || [],
      orders: req.user.orders || []
    });
});

// ✅ LOGOUT
app.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.redirect("/login.html");
    });
  });
});

// ✅ HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ START SERVER
app.listen(port, () =>
  console.log(`✅ Server running at http://localhost:${port}`)
);

