require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const cors = require("cors");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// ------------------- MIDDLEWARE -------------------
app.use(express.json());
app.use(cors());

// ------------------- SESSION -------------------
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysupersecret",
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

// ------------------- PASSPORT SETUP -------------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      return cb(null, profile); // save user if you want
    }
  )
);

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// ------------------- GOOGLE AUTH ROUTES -------------------

// Step 1: Redirect user to Google login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Google redirects here after login
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/fail",
  }),
  (req, res) => {
    res.send("Google Login Successful!");
  }
);

app.get("/auth/fail", (req, res) => {
  res.send("Google Login Failed");
});

// ------------------- MONGO DB CONNECTION -------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 MongoDB connected"))
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
    process.exit(1);
  });

// ------------------- BASIC ROUTE -------------------
app.get("/", (req, res) => {
  res.send("Backend Running Successfully on Render!");
});

// ------------------- START SERVER -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
