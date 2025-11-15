require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

// Initialize app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ====== SESSION SETUP (Production Ready) ======
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret123",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60, // 14 days
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production", // Render = true
      maxAge: 14 * 24 * 60 * 60 * 1000,
    },
  })
);

// ====== PASSPORT SETUP ======
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// ====== GOOGLE AUTH ROUTES ======

// Step 1 – Redirect user to Google login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2 – Google redirects back here
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    res.send("Google Login Successful!");
  }
);

app.get("/auth/failure", (req, res) => {
  res.send("Google Login Failed");
});

// ====== MONGODB CONNECTION ======
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 MongoDB Connected Successfully"))
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// ====== BASIC API ROUTE ======
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// ====== START SERVER ======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on PORT ${PORT}`)
);
