require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const path = require("path");

const app = express();

// ----------------- STATIC FRONTEND -------------------
app.use(express.static(path.join(__dirname)));

// Default → index.html when opening Render URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ----------------- MIDDLEWARE -------------------
app.use(express.json());

// ----------------- SESSION SETUP -------------------
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret123",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60,
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 14 * 24 * 60 * 60 * 1000,
    },
  })
);

// ----------------- PASSPORT SETUP -------------------
app.use(passport.initialize());
app.use(passport.session());

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
passport.deserializeUser((user, done) => done(null, user));

// ----------------- GOOGLE AUTH ROUTES -------------------
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login.html",
  }),
  (req, res) => {
    res.redirect("/dashboard.html");
  }
);

// ----------------- DEBUG ROUTE (IMPORTANT) -------------------
app.get("/check", (req, res) => {
  res.send(`
    <h2>ENV CHECK</h2>
    <p><b>Client ID:</b> ${process.env.GOOGLE_CLIENT_ID}</p>
    <p><b>Client Secret (last 4):</b> ${
      process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET.slice(-4)
        : "NOT LOADED"
    }</p>
  `);
});

// ----------------- MONGO CONNECT -------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 MongoDB connected"))
  .catch((err) => {
    console.log("❌ MongoDB error:", err);
    process.exit(1);
  });

// ----------------- START SERVER -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
